import { API } from '@/config/config.js'
export default {
    getters:{
        inOrders(state) {
            return state.orders
        }
    },
    actions:{
        async fetchOrdersPOST() {
            const token = localStorage.getItem('myAppToken')
            fetch(
                `${API}/order`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                }
            )
        },
        async fetchOrdersGET(ctx) {
            const token = localStorage.getItem('myAppToken')
            const res = await fetch(
                `${API}/order`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                }
            );
            let orders = await res.json(); 
            orders = orders.data
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