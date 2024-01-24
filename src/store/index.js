import { createStore } from 'vuex'
import product from './modules/product'
import token from './modules/token'
import sighup from './modules/sighup'
import logout from './modules/logout'
import cart from './modules/cart'

export default createStore({
  modules: {
    product,
    token,
    sighup,
    logout,
    cart
  }
})
