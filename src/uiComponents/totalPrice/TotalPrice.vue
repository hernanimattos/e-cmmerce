<template>
	<div class="box total-price message primary">
		<h3>Valor total</h3>
		<strong>{{totalPrice | money }}</strong>
	</div>
</template>

<script>
export default {
	name: 'TotalPrice',
	props: {
		totalPrice: {
			type: [String, Number],
			required: false,
		},
	},
};
</script>

<style>
.total-price {
	margin-top: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>
