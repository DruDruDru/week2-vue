<template>
    <Login />
    <router-link :to="{ name: 'home' }">Назад</router-link>
</template>

<script>
import Login from '@/components/Login.vue';

export default {
    name: 'LoginView',
    components: {
        Login,
    }
}
</script>
