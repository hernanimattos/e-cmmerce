<template>
	<main>
		<Loader v-if="loader" />
		<TopBar />
		<div class="container">

			<router-view />
		</div>
	</main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('pruductsStore');

import TopBar from '@/components/topBar/TopBar';
import Loader from '@/uiComponents/loader/Loader';
export default {
	name: 'App',
	computed: {
		...mapState(['loader']),
	},
	components: {
		TopBar,
		Loader,
	},
};
</script>

<style scoped>
.container {
	margin-top: 5rem;
}
</style>
