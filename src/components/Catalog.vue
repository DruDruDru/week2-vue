<template>
    <div class="catalog">
        <Product
            v-for="product in allProducts"
            :key="product.id" 
            :product="product"
        />
    </div>
</template>

<script>

import Product from '@/components/Product.vue';
import { mapGetters } from 'vuex'

export default {
    name: 'Catalog',
    components: { Product },

    computed: mapGetters(['allProducts']),
    async mounted() {
        await this.$store.dispatch('fetchProducts');
    }
}
</script>

<style scoped>
</style>