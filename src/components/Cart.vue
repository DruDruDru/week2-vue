<template>
    <div>
        <Product
            v-for="product in inCart"
            :key="product.id"  
            :product="product"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Product from "@/components/Product.vue"
export default {
    name: 'Cart',
    computed: mapGetters['inCart'],
    components: {
        Product
    }
}
</script>

<style scoped>

</style>