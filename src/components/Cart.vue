<template>
    <div class="cart">
        <Product
            v-for="product in inCart"
            :key="product.id"  
            :product="product"
            :inCatalog="false"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Product from "@/components/Product.vue"
export default {
    name: 'Cart',
    computed: mapGetters(['inCart']),
    components: {
        Product
    },
    async mounted() {
        await this.$store.dispatch('fetchCartGET')
    }
}
</script>

<style scoped>

</style>