export default {
    state: {
        message: ''
    },
    getters: {
        getMessage(state) {
            return state.message
        }
    },
    mutations: {
        updateMessage(state, message) {
            state.message = message
        }
    },
    actions: {
        async fetchLogout(ctx) {
            const token = localStorage.getItem('myAppToken')
            const res = await fetch(
                `https://jurapro.bhuser.ru/api-shop/logout?token=${token}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                }
            );
            let message = await res.json();
            localStorage.removeItem('myAppToken')
            ctx.commit('updateProducts', message)
        }
    },
}