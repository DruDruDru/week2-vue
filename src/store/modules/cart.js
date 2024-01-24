export default {
    getters:{
        inCart(state) {
            return state.cart
        }
    },
    actions:{
        async fetchCartPOST(ctx, product) {
            const token = localStorage.getItem('myAppToken')
            fetch(
                `https://jurapro.bhuser.ru/api-shop/cart/${product.id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                }
            )
        },
        async fetchCartGET(ctx) {
            const token = localStorage.getItem('myAppToken')
            const res = await fetch(
                `https://jurapro.bhuser.ru/api-shop/cart`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                },
            )
            let cart = await res.json()
            cart = cart.data
            ctx.commit('updateCart', cart)
        },
    },
    mutations:{
        updateCart(state, cart) {
            state.cart = cart
        }
    },
    state:{
        cart: []
    }
}