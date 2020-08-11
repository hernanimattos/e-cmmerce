<template>
	<header class="top-bar">
		<b-navbar class="container">
			<template slot="brand">
				<b-navbar-item
					tag="router-link"
					:to="{ path: '/' }"
				>
					<img
						src="https://tembici.com.br/assets/img/logo/tembici-logo.png"
						alt="Lightweight UI components for Vue.js based on Bulma"
					>

				</b-navbar-item>
				<span class="navbar-item navbar-item--cart">

					<cart-icon
						:qtd="cart.qtd"
						class="is-hidden-desktop"
					/>
				</span>
			</template>
			<template slot="start">
				<b-navbar-item
					tag="router-link"
					:to="{ path: '/' }"
				>
					Home
				</b-navbar-item>
				<b-navbar-item
					tag="router-link"
					to="/mais-visualizados"
				>
					Mais vistos
				</b-navbar-item>
			</template>
			<template slot="end">
				<b-navbar-item
					tag="router-link"
					to="/checkout"
				>
					<cart-icon
						:qtd="cart.qtd"
						class="is-hidden-tablet-only is-hidden-mobile"
					/>
				</b-navbar-item>
			</template>
		</b-navbar>
	</header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('pruductsStore');
import CartIcon from '@/uiComponents/cartIcon/CartIcon';
export default {
	name: 'TopBar',
	computed: {
		...mapState(['cart']),
	},
	components: {
		CartIcon,
	},
};
</script>

<style>
.top-bar {
	box-shadow: 1px 5px 4px -6px rgba(0, 0, 0, 0.75);
	margin-bottom: 2rem;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 222;
	background: #fff;
}
.navbar-item--cart {
	margin-left: auto;
}
</style>
