<template>
    <div class="orders">
        <Product
            v-for="product in inOrders"
            :key="product.id"  
            :product="product"
            :isOrders="true"
        />
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
    computed: mapGetters(['inOrders'])
}
</script>

<style scoped>

</style>