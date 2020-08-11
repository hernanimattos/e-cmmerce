import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import {
	faPlus,
	faMinus,
	faShoppingCart,
	faTrash,
	faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus, faMinus, faShoppingCart, faTrash, faShoppingBasket);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
	defaultIconComponent: 'vue-fontawesome',
	defaultIconPack: 'fas',
});

Vue.filter('money', function(value) {
	if (!value) return 'R$ 00,00';

	const newValue = new Intl.NumberFormat([], {
		style: 'currency',
		currency: 'BRL',
	}).format(value);
	return `${newValue}`;
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
