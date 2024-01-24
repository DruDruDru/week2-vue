<template>
    <Sighup />
    <router-link :to="{ name: 'home' }">Назад</router-link>
</template>

<script>
import Sighup from '@/components/Sighup.vue';

export default {
    name: 'SighupView',
    components: {
        Sighup
    }
}
</script>