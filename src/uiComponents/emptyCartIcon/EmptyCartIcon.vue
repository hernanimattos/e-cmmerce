<template>
	<div class="empty-cart-icon--container">
		<span class="empty-cart__tool-tip">0</span>
		<b-icon icon="shopping-basket"> </b-icon>
	</div>
</template>

<script>
export default {
	name: 'EmptyBasketIcon',
	props: {
		qtd: Number,
	},
};
</script>

<style>
.empty-cart-icon--container {
	position: absolute;
	bottom: 0;
	left: 50%;
	top: 50%;
}
.empty-cart-icon--container .icon svg {
	width: 20rem;
	height: 20rem;
}
.empty-cart__tool-tip {
	display: block;
	border-radius: 100%;
	color: #fff;
	background-color: red;
	position: absolute;
	top: -5px;
	text-align: center;
	min-width: 72px;
	font-size: 11px;
	x: ;
	min-height: 60px;
	font-size: 3rem;
	right: -23px;
	padding: 0px;
	top: -143px;
}
</style>
