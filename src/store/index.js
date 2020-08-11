import Vue from "vue";
import Vuex from "vuex";
import Http from "../provider/Http";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    pruductsStore: {
      namespaced: true,
      state: {
        loader: false,
        limit: 10,
        products: [],
        totalPrice: "",
        productsMoreViewed: [],
        cart: { products: [], qtd: 0 }
      },
      mutations: {
        setProducts(state, payload) {
          state.products = payload;
        },
        setProdToCart(state, product) {
          const { count } = product;
          if (!state.cart.products.some(p => p.id == product.id)) {
            state.cart.products.push({ ...product, count: 1 });
            return;
          }

          return state.cart.products.map(prod => {
            if (prod.id == product.id) {
              prod.count = count;
            }
            return prod;
          });
        },
        removeItemOfCart(state, payload) {
          return state.cart.products.map((prod, i) => {
            if (prod.id == payload.id) {
              state.cart.products.splice(i, 1);
            }
            return state.cart.products;
          })[0];
        },
        cartQtd(state, payload) {
          state.cart.qtd = payload;
        },
        updateTotalPriceCart(state, payload) {
          state.totalPrice = payload;
        },
        chargeMoreProducts(state, payload) {
          state.limit = payload;
        },
        loaderStatus(state, payload) {
          state.loader = payload;
        },
        moreViwedProducts(state, payload) {
          state.moreViwedProducts = payload;
        }
      },
      getters: {
        limitAdd(state) {
          let newQtd = state.limit + 10;
          return newQtd;
        },
        moreViwedFilter(state) {
          const r = [...state.products];
          const topFive = r.sort((a, b) => {
            if (
              parseInt(a.numberOfViewed, 10) < parseInt(b.numberOfViewed, 10)
            ) {
              return 1;
            }
          });
          return topFive.splice(0, 5);
        }
      },
      actions: {
        async getProducts({ commit }, { page, limit } = {}) {
          try {
            commit("loaderStatus", true);
            const response = await Http.get(
              `/products?page=${page}&limit=${limit}`
            );
            const { data } = response;

            commit("chargeMoreProducts", limit);
            commit("setProducts", data);
            commit("loaderStatus", false);

            Promise.resolve(data);
          } catch (e) {
            Promise.reject(e);
          }
        },
        async searchProduct({ commit }, payload) {
          try {
            commit("loaderStatus", true);
            const response = await Http.get(`/products?name=${payload}`);
            const { data } = response;

            commit("setProducts", data);
            commit("loaderStatus", false);

            Promise.resolve(data);
          } catch (e) {
            Promise.reject(e);
          }
        },

        updateTotalPrice({ commit, state }) {
          const values = state.cart.products
            .map(p => p.count * parseInt(p.unitPrice, 10))
            .reduce((a, b) => {
              return a + b;
            }, 0);
          commit("updateTotalPriceCart", values);
        },

        addProdCart({ commit, state }, payload) {
          commit("setProdToCart", payload);
          commit("cartQtd", state.cart.products.length);
        },
        removeProduct({ commit }, index) {
          commit("removeItemOfCart", index);
        },
        cartQtd({ commit }, payload) {
          commit("cartQtd", payload);
        },
        chargeMoreProducts({ commit }, payload) {
          commit("chargeMoreProducts", payload);
        },
        moreViwed({ commit }, payload) {
          commit("loaderStatus", true);
          commit("moreViwedProducts", payload);
          commit("loaderStatus", false);
        }
      }
    }
  }
});
