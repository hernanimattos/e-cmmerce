<template>
	<article class="column is-half-tablet is-one-third-widescreen is-narrow">
		<div class="card">
			<div class="card-image">
				<figure class="image is-4by3">
					<img
						:src="imgProduct"
						:alt="name"
					/>

				</figure>
				<span
					@click="($event) => $emit('addProduct', $event)"
					class="btn"
				>
					<b-icon
						icon="plus"
						class="product-icon"
					/>
				</span>
			</div>
			<div class="card-content">
				<div class="media">
					<div class="media-content">
						<p class="title is-4">{{ name }}</p>
					</div>
				</div>

				<div class="content">
					{{ description }}
					<strong>{{ price | money }}</strong>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	name: 'ProductCart',
	props: {
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		imgProduct: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
			default: '00,00',
		},
	},
};
</script>
<style  scoped>
.product-icon {
	position: absolute;
	right: 10px;
	color: #fff;
	padding: 1rem;
	bottom: 10px;
	font-size: 10px;
	border-radius: 18px;
	background-color: #ff8d00;
	cursor: pointer;
	transition: 0.5s;
}
.product-icon:hover {
	background-color: #9a7445;
	transition: 0.5s;
}
</style>
