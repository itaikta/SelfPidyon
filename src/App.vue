<script setup lang="ts">
    import { useDark } from "@vueuse/core";
    const isDark = useDark();
</script>

<template>
    <div id="navTabs">
        <button type="button" onclick="location.href='/'">Nusach</button>
        <button type="button" onclick="location.href='/info'">Information</button>
        <button type="button" onclick="location.href='/source'">Source</button>
    </div>
    <RouterView />
</template>
