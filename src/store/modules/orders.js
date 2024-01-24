export default {
    getters:{
        inOrders(state) {
            return state.orders
        }
    },
    actions:{
        async fetchOrdersPOST(ctx, productId) {
            const token = localStorage.getItem('myAppToken')
            fetch(
                'https://jurapro.bhuser.ru/api-shop/order',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                    body: productId
                }
            )
        },
        async fetchOrdersGET(ctx) {
            const token = localStorage.getItem('myAppToken')
            const res = await fetch(
                'https://jurapro.bhuser.ru/api-shop/order',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                }
            );
            const orders = await res.json(); 
            ctx.commit('updateOrders', orders)
        },
    },
    mutations:{
        updateOrders(state, orders) {
            state.orders = orders
        }
    },
    state:{
        orders: []
    }
}