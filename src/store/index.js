import { createStore } from 'vuex'
import product from './modules/product'
import token from './modules/token'

export default createStore({
  modules: {
    product,
    token
  }
})
