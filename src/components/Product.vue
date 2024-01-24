<template>
    <div class="product" >
        <img src="../assets/logo.png" class="product-image" alt="product_image" />
        <div class="product-info">
            <div class="prodcut-wrap">
                <div class="product-text">
                    <h3>{{ product.name }}</h3>
                    <p>{{ product.description }}</p>
                </div>
                <p>Цена: {{ product.price }}</p>
            </div>
            <button class="add-to-cart" @click="">Добавить в корзину</button>
        </div>
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
    },
    methods: {
        
    }
}
</script>

<style scoped>
.product-text,
.prodcut-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.product-image {
    width: 100px;
    height: 100px;
}
.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
