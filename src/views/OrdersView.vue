<template>
    <h2>Заказы:</h2>
    <Cart />
</template>

<script>
import Orders from '../components/Orders.vue'
export default {
    name: 'OrdersView',
    components: { Orders }
}
</script>