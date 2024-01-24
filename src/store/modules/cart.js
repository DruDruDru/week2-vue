export default {
    getters:{
    },
    actions:{
        fetchCart(ctx, product) {
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

        }
    },
    mutations:{
    },
    state:{
    }
}