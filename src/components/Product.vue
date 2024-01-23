<template>
    <div class="product" >
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
    props: {
        product: {
            id: Number,
            name: String,
            description: String,
            price: Number
        }
    }
}
</script>

<style scoped>

</style>
