<template>
  <nav>
    <router-link :to="{ name: 'home' }">Каталог товаров</router-link>
    <router-link v-if="!token" :to="{ name: 'login' }">Авторизация</router-link>
    <router-link v-if="!token" :to="{ name: 'sighup' }">Регистрация</router-link>
    <router-link v-if="token" :to="{ name: 'cart' }">Корзина</router-link>
    <button v-if="token" @click="logout">Выход</button>
  </nav>
  <router-view/>
</template>
<script>
export default {
  data() {
    return {
      token: localStorage.getItem('myAppToken')
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('fetchLogout').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  gap: 1.5em;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
