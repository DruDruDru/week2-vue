<template>
    <h2>Корзина:</h2>
    <Cart />
    <button 
        @click="addToOrders" 
        id="toOrderButton"
        v-if="cartEmpty"
    >Заказать</button>
    <h3 v-if="!cartEmpty">Корзина пуста</h3>
</template>

<script>
import Cart from '../components/Cart.vue'
export default {
    name: 'CartView',
    components: { Cart },
    computed: {
        cartEmpty() {
            if (this.$store.state.cart['cart']) {
                return this.$store.state.cart['cart'].length
            } else {
                return false
            } 
        }
    },
    methods: {
        addToOrders() {
            this.$store.dispatch('fetchOrdersPOST')
        }
    }
}
</script>