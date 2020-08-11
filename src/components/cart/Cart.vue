<template>
	<section>
		<CartProduct
			v-for="item in cart.products"
			:key="item.id"
			:count="item.count"
			:image="item.image"
			:description="item.description"
			:itemId="item.id"
			@updateQtd="updatCart(item, $event)"
			@removeItem="remove"
			:price="item.unitPrice"
		/>

	</section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('pruductsStore');
import CartProduct from './cartProduct/CartProduct';

export default {
	name: 'Cart',
	computed: {
		...mapState(['cart']),
	},
	methods: {
		...mapActions([
			'removeProduct',
			'cartQtd',
			'addProdCart',
			'updateTotalPrice',
		]),

		updatCart(product, qtd) {
			this.addProdCart({ ...product, count: qtd });
			this.updateTotalPrice();
			return product.count;
		},
		remove(id) {
			const product = this.cart.products.find((p) => p.id == id);
			this.removeProduct(product);
			this.updateTotalPrice();
			this.cartQtd(this.cart.products.length);
		},
	},
	components: {
		CartProduct,
	},
};
</script>
