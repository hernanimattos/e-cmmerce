<template>
	<main class="home">
		<Search @click="searchProduct" />
		<div class="columns is-tablet is-multiline">
			<ProductCart
				v-for="product in products"
				:key="product.id"
				:description="product.description"
				:name="product.name"
				:imgProduct="product.image"
				:price="product.unitPrice"
				@addProduct="addProductTocart(product)"
				:data-filter="product.name"
				class="product"
			/>
		</div>
	</main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapGetters } = createNamespacedHelpers(
	'pruductsStore'
);
import Search from '@/uiComponents/search/Search';
import ProductCart from '@/components/product/ProductCard';
export default {
	name: 'Home',
	data() {
		return {
			productsLocal: this.products,
		};
	},
	computed: {
		...mapState(['products', 'cart']),
		...mapGetters(['limitAdd']),
	},
	methods: {
		...mapActions([
			'getProducts',
			'addProdCart',
			'chargeMoreProducts',
			'searchProduct',
		]),
		scroll() {
			window.onscroll = () => {
				if (
					Math.round(window.innerHeight + (window.scrollY + 1)) >=
						document.body.offsetHeight &&
					this.$route.name == 'Home'
				) {
					this.getProducts({ page: 1, limit: this.limitAdd });
					this.chargeMoreProducts(this.limitAdd);
				}
			};
		},
		addProductTocart(product) {
			const prodFilter = this.cart.products.find((p) => p.id == product.id);
			let { count } = prodFilter || {};
			const itens = (count += 1);
			this.addProdCart({ ...product, count: count ? itens : 1 });
		},
	},
	mounted() {
		this.getProducts({ page: 1, limit: 10 });
		this.scroll();
	},
	components: {
		ProductCart,
		Search,
	},
};
</script>
