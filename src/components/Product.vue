<template>
    <div class="product" >
        <img src="../assets/logo.png" alt="product_image" />
        <div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
        </div>
        <p>Цена: {{ product.price }}</p>
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
.product > div {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.25em solid rgb(125, 184, 36);
    border-radius: 15px;
}
p {
    max-width: 250px;
}
h3 {
    max-width: 325px;
}
</style>
