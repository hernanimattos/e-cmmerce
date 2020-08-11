<template>
	<main class="home">
		<div class="columns is-tablet is-multiline">
			<ProductCart
				v-for="product in moreViwedFilter"
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
		...mapGetters(['moreViwedFilter']),
	},
	methods: {
		...mapActions(['moreViwed', 'addProdCart']),

		addProductTocart(product) {
			const prodFilter = this.cart.products.find((p) => p.id == product.id);
			let { count } = prodFilter || {};
			const itens = (count += 1);
			this.addProdCart({ ...product, count: count ? itens : 1 });
		},
	},
	mounted() {
		this.moreViwed();
	},
	components: {
		ProductCart,
	},
};
</script>
