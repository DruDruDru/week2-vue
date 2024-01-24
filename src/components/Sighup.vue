<template>
    <form class="sighup" @submit.prevent="sighup">
        <h1>Регистрация</h1>
        <label>ФИО</label>
        <input type="text" required v-model="username" />
        <label>Почта</label>
        <input type="email" required v-model="email" />
        <label>Пароль</label>
        <input type="password" required v-model="password" />
        <label>Подтвердите пароль</label>
        <input type="password" required v-model="passwordConfirm" />
        <hr />
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
        <button type="submit">Зарегистрироваться</button>
    </form>
</template>

<script>
export default {
    name: 'Sighup',
    data() {
        return {
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
            errors: []
        }
    },
    methods: {
        sighup() {
            if (this.password === this.passwordConfirm) {
                this.errors = []
                const dataRegister = {
                    "fio": this.username,
                    "email": this.email,
                    "password": this.password,
                }
                this.$store.dispatch('REGISTER_REQUEST', dataRegister).then(() => this.$router.push("/login"))
            } else {
                if (this.errors.indexOf('Оба пароля должны совпадать') === -1) {
                    this.errors.push('Оба пароля должны совпадать')
                } 
            }
        }
    }
}
</script>

<style scoped>
.sighup {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    margin: 0 auto;
    gap: 5px;
    margin-bottom: 25px;
}
.sighup input, button {
    border: 1px solid black;
    border-radius: 5px;
}
hr {
    margin: 10px 0;
}
</style>
