<template>
    <div class="catalog">
        <Product
            v-for="product in allProducts"
            :key="product.id"  
            :product="product"
            :inCatalog="true"
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
    },
}
</script>

<style>
.catalog, .cart {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 350px);
    gap: 5em 1.5em;
    justify-content: center;
}
</style>