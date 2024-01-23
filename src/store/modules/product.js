export default {
    state: {
        products: []
    },
    getters: {
        allProducts(state) {
            return state.products
        }
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products
        }
    },
    actions: {
        async fetchProducts(ctx) {
            const res = await fetch(
                'https://jurapro.bhuser.ru/api-shop/products',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                    },
                }
            );
            let temp = await res.json();
            const products = temp.data
            console.log(process.env.VUE_APP_API);
            ctx.commit('updateProducts', products)
        }
    },
}