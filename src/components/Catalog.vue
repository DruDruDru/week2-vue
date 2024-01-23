<template>
    <div class="catalog">
        <Product />
        <Product />
        <Product />
    </div>
</template>

<script>

import Product from '@/components/Product.vue';

export default {
    name: 'Catalog',
    components: { Product }
}
</script>

<style scoped>
</style>