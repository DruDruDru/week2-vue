<template>
    <form class="login" @submit.prevent="login">
        <h1>Авторизация</h1>
        <label>Имя</label>
        <input type="text" required v-model="username" />
        <label>Пароль</label>
        <input type="password" required v-model="password" />
        <hr />
        <button type="submit">Войти</button>
    </form>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        login() {
            const userData = {
                username: this.username,
                password: this.password
            };
            this.$store
              .dispatch('AUTH_REQUEST', userData)
              .then(() => this.$router.push("/"));
        }
    }
}
</script>
<style scoped>
.login {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    margin: 0 auto;
}
.login input, button {
    border: 1px solid black;
    border-radius: 5px;
}
hr {
    margin: 10px 0;
}
</style>