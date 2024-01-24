import { createStore } from 'vuex'
import product from './modules/product'
import token from './modules/token'
import sighup from './modules/sighup'

export default createStore({
  modules: {
    product,
    token,
    sighup
  }
})
