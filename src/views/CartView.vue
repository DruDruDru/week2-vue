<template>
    <h2>Корзина:</h2>
    <Cart />
</template>

<script>
import Cart from '../components/Cart.vue'
export default {
    name: 'CartView',
    components: { Cart }
}
</script>