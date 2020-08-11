<template>
	<div class="cart-icon--container">
		<span class="tool-tip">{{qtd}}</span>
		<b-icon icon="shopping-cart"> </b-icon>
	</div>
</template>

<script>
export default {
	name: 'CartIcon',
	props: {
		qtd: Number,
	},
};
</script>

<style>
.cart-icon--container {
	position: relative;
	width: 35px;
}
.tool-tip {
	display: block;
	border-radius: 10px;
	color: #fff;
	background-color: red;
	position: absolute;
	top: -5px;
	text-align: center;
	min-width: 20px;
	font-size: 8px;
	right: -5px;
	padding: 1px;
}
</style>
