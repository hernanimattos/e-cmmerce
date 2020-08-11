<template>
	<main class="wrapper-checkout">
		<Cart />

		<EmptyCartIcon
			:qtd="cart.qtd"
			v-if="cart.qtd == 0"
		/>

		<TotalPrice
			:total-price="totalPrice"
			v-else
		/>
	</main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('pruductsStore');
import EmptyCartIcon from '@/uiComponents/emptyCartIcon/EmptyCartIcon';
import TotalPrice from '@/uiComponents/totalPrice/TotalPrice';
import Cart from '@/components/cart/Cart';
export default {
	name: 'CartContainer',
	computed: {
		...mapState(['totalPrice', 'cart']),
	},
	methods: {
		...mapActions(['updateTotalPrice']),
	},
	mounted() {
		this.updateTotalPrice();
	},
	components: {
		Cart,
		EmptyCartIcon,
		TotalPrice,
	},
};
</script>
<style scoped>
.wrapper-checkout {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	display: flex;
	height: 100vh;
	flex-direction: column;
}
.cart-icon--container {
	position: absolute;
	bottom: 0;
	left: calc(50%);
}
</style>
