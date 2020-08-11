<template>
	<section class="search">
		<b-field>
			<b-input
				v-model="inputValue"
				placeholder="No label"
				rounded
				expanded
			/>
			<p class="control">
				<b-button
					class="button is-primary"
					@click="($event)=> $emit('click',inputValue)"
				>Search</b-button>
			</p>
		</b-field>
	</section>
</template>

<script>
export default {
	name: 'Search',
	data() {
		return {
			inputValue: '',
		};
	},
	computed: {
		filteredDataArray() {
			return this.data.filter((option) => {
				return (
					option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
				);
			});
		},
	},
};
</script>

<style scoped>
.search {
	margin-bottom: 2rem;
}
</style>
