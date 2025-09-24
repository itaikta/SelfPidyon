<script setup lang="ts">
    //import { usePreferredColorScheme, useToggle } from '@vueuse/core';
    import Breadcrumbs from './components/Breadcrumbs.vue';
    //const themeColour = usePreferredColorScheme();
    //const toggleThemeColour = useToggle(themeColour);
</script>

<template>
    <div id="navTabs">
        <RouterLink to="/"><button type="button">Nusach</button></RouterLink>
        <RouterLink to="/info"><button type="button">Information</button></RouterLink>
        <RouterLink to="/source"><button type="button">Source</button></RouterLink>
        <!--<button type="button" @click="toggleThemeColour()">Toggle Theme</button>
        <button type="button">{{ themeColour }}</button>-->
    </div>
    <Breadcrumbs />
    <RouterView />
</template>
