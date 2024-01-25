<template>
    <form class="login" @submit.prevent="login">
        <h1>Авторизация</h1>
        <label>Почта</label>
        <input type="email" required v-model="email" />
        <label>Пароль</label>
        <input type="password" required v-model="password" />
        <hr />
        <button type="submit">Войти</button>
    </form>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            if (mapGetters['isAuthenticated']) {
                alert('Уже зарегистрирован')
            } else {
                const userData = {
                email: this.email,
                password: this.password
                };
                this.$store
                .dispatch('AUTH_REQUEST', userData)
                .then(() => this.$router.push("/"))
            }
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
    gap: 5px;
    margin-bottom: 25px;
}
.login input, button {
    border: 1px solid black;
    border-radius: 5px;
}
hr {
    margin: 10px 0;
}
</style>