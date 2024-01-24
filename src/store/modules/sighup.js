export default {
    state: {
        userData: {},
        token: ''
    },
    getters: {
        getToken: (state) => state.token
    },
    mutations: {
        REGISTER_SUCCESS: (state, token) => {
            state.token = token
        },
        REGISTER_ERROR: (state) => {
            state.token = ''
        }
    },
    actions: {
        REGISTER_REQUEST: async (ctx, userData) => {
            const res = await fetch(
                'https://jurapro.bhuser.ru/api-shop/signup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(userData)
                },
            );
            let token = res.json()
            ctx.commit('REGISTER_SUCCESS', token)
        }
    }
}