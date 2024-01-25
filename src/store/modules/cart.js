import { API } from '@/config/config.js'

export default {
    getters:{
        inCart(state) {
            return state.cart
        }
    },
    actions:{
        async fetchCartPOST(ctx, productId) {
            const token = localStorage.getItem('myAppToken')
            await fetch(
                `${API}/cart/${productId}`,
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
                `${API}/cart`,
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

            for (let i = 0;i < cart.length;++i) {
                cart.splice(i, 1, {data: [cart[i]], count: 1})
            }

            for (let product of cart) {
                for (let elem of cart) {
                    if ((product.data[0].product_id === elem.data[0].product_id) &&
                        (product.data[0].id !== elem.data[0].id)) {
                            product.data.push(elem.data[0]);
                            product.count = product.data.length;
                            cart.splice(cart.indexOf(elem),1)
                    }
                }
            }
            ctx.commit('updateCart', cart)
        },
        async fetchCartDELETE(ctx, productId) {
            const token = localStorage.getItem('myAppToken')
            await fetch(
                `${API}/cart/${productId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                },
            )
            ctx.commit('updateCart')
        }
    },
    mutations:{
        updateCart(state, cart) {
            state.cart = cart
        },
    },
    state:{
        cart: []
    }
}