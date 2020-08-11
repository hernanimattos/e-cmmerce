import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/checkout',
		name: 'Checkout',
		component: () => import('../views/CartContainer.vue'),
	},
	{
		path: '/mais-visualizados',
		name: 'Mais Visualizados',
		component: () => import('../views/ProductsMoreViewed.vue'),
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
