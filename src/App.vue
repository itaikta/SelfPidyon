<script setup lang="ts">
    import Breadcrumbs from './components/Breadcrumbs.vue';
</script>

<template>
    <div id="navTabs">
        <RouterLink to="/"><button type="button">Nusach</button></RouterLink>
        <RouterLink to="/info"><button type="button">Information</button></RouterLink>
        <RouterLink to="/source"><button type="button">Source</button></RouterLink>
    </div>
    <Breadcrumbs />
    <RouterView />
</template>
