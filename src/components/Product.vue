<template>
    <div class="product" >
        <img src="../assets/logo.png" class="product-image" alt="product_image" />
        <div class="product-info">
            <div class="prodcut-wrap" v-if="inCatalog">
                <div class="product-text">
                    <h3>{{ product.name }}</h3>
                    <p>{{ product.description }}</p>
                </div>
                <p>Цена: {{ product.price }}</p>
            </div>
            <div class="prodcut-wrap" v-if="!inCatalog">
                <div class="product-text">
                    <h3>{{ product.data[0].name }}</h3>
                    <p>{{ product.data[0].description }}</p>
                </div>
                <p>Цена: {{ product.data[0].price }}</p>
                <div>
                    <button @click="removeFromCart(product.data[0].id)">Убрать</button>
                    Кол-во: {{ product.count }}
                    <button @click="addToCart(product.data[0].product_id)">Добавить</button>
                </div>
            </div>
            <button 
                v-if="inCatalog" 
                class="add-to-cart" 
                @click="addToCart(product.id)"
            >Добавить в корзину</button>
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
        },
        inCatalog: Boolean,
        isOrders: Boolean
    },
    methods: {
        async addToCart(product) {
            await this.$store.dispatch('fetchCartPOST', product)
        },
        async removeFromCart(productId) {
            await this.$store.dispatch('fetchCartDELETE', productId)
        }
    }
}
</script>

<style>
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
#toOrderButton {
    border: 2px solid #2c3e50;
    border-radius: 5px;
    margin: 25px 0;
}
.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.25em solid rgb(125, 184, 36);
    border-radius: 15px;
}
.product p {
    max-width: 250px;
}
.product h3 {
    max-width: 325px;
}
</style>
