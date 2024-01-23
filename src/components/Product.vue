<template>
    <div class="product">
        <img src="../assets/logo.png" alt="product_image" />
        <div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
        </div>
        <p>{{ product.price }}</p>
    </div>
</template>

<script>
export default {
    name: 'Product',
    data() {
        return {
            product: {
                id:1,
                name:'test',
                description:'test test',
                price: 5000
            }
        }
    }
}
</script>

<style scoped>

</style>
