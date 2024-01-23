import { createStore } from 'vuex'

export default createStore({
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
        'https://jurapro.bhuser.ru/api-shop/products'
      );
      let temp = await res.json();
      const products = temp.data

      ctx.commit('updateProducts', products)
    }
  },
  modules: {
  }
})
