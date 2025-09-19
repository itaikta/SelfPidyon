<script setup lang="ts">
    import { usePreferredColorScheme, useToggle } from '@vueuse/core';
    import Breadcrumbs from './components/Breadcrumbs.vue';
    const themeColour = usePreferredColorScheme();
    const toggleThemeColour = useToggle(themeColour);
</script>

<template>
    <div id="navTabs">
        <button type="button"><RouterLink to="/">Nusach</RouterLink></button>
        <button type="button"><RouterLink to="/info">Information</RouterLink></button>
        <button type="button"><RouterLink to="/source">Source</RouterLink></button>
    </div>
    <Breadcrumbs />
    <RouterView />
</template>
