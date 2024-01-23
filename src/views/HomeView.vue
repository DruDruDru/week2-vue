<template>
    <div class="home">
        <Catalog />
    </div>
</template>

<script>
import Catalog from '@/components/Catalog.vue'

export default {
    name: 'HomeView',
    components: {
        Catalog,
    }
}
</script>