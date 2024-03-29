import { API } from '@/config/config.js'

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
                `${API}/products`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                    },
                }
            );
            let temp = await res.json();
            const products = temp.data
            ctx.commit('updateProducts', products)
        }
    },
}