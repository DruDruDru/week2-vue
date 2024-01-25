<template>
    <div class="orders">
        <div 
            v-for="order in inOrders"
            class="order"
            :key="order.id"
        >
            <p>заказ #{{ order.id }}</p>
            <ul class="list">
                <li v-for="prod in order.products">Товар под id: {{ prod }}</li>
            </ul>
            <p>сумма заказа: {{ order.order_price }}</p>
        </div>
    </div>
</template>

<script>
import Product from './Product.vue';
import { mapGetters } from 'vuex';
export default {
    name: 'Orders',
    components: {
        Product
    },
    computed: mapGetters(['inOrders']),
    async mounted() {
        await this.$store.dispatch('fetchOrdersGET')
    },
}
</script>

<style scoped>

.order {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.25em solid rgb(125, 184, 36);
    border-radius: 15px;
}
.list {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}
.orders {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 350px);
    gap: 5em 1.5em;
    justify-content: center;
}
</style>