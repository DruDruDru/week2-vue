<template>
    <div class="home">
        <Catalog />
    </div>
</template>

<script>
import Catalog from '@/components/Catalog.vue'

export default {
    name: 'CatalogView',
    components: {
        Catalog,
    }
}
</script>