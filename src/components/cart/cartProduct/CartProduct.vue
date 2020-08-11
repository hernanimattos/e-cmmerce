<template>
	<div class="box">
		<article class="media">
			<div class="media-left">
				<figure class="image is-64x64">
					<img :src="image" />
				</figure>
			</div>
			<div class="media-content">
				<div class="content prod-checkout--item pd-05">
					<p>
						{{description}}
					</p>
					<strong>{{ price | money }}</strong>
				</div>
			</div>
			<div class="media-right btn-qtd pd-05">
				<b-field class="btn-qtd__field">
					<b-numberinput
						controls-position="compact"
						controls-rounded
						size="is-small"
						:value="count"
						@input="countItem"
					>
					</b-numberinput>
				</b-field>
			</div>
			<div class="checkout-exclude pd-03">
				<div class="buttons">
					<b-button
						type="is-danger"
						icon-right="trash"
						@click="remove(itemId)"
					/>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	name: 'CartProduct',
	methods: {
		countItem(e) {
			this.$emit('updateQtd', e);
		},
		remove(id) {
			this.$emit('removeItem', id);
		},
	},
	props: {
		image: {
			type: String,
			required: true,
		},
		count: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		itemId: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
	},
};
</script>
<style scoped>
.prod-checkout--item {
	display: flex;
	justify-content: space-between;
}
.pd-05 {
	padding: 0.5rem;
}
.pd-03 {
	padding: 0.3rem;
}
.btn-qtd__field {
	width: 100px;
}
</style>
