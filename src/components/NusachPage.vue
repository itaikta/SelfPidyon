<script lang="ts" setup>
    import NusachHebrew from './NusachHebrew.vue';
    import NusachEnglishTransliteration from './NusachEnglishTransliteration.vue';
    import { ref } from 'vue';
    let showLeft = ref(true);
</script>
<template>
    <h1>Self Pidyon - Nusach</h1>
    <div class="columns">
        <div v-if="showLeft" class="column">
            <NusachEnglishTransliteration />
        </div>
        <div class="column">
            <button v-on:click="showLeft = !showLeft" type="button">TOGGLE</button>
            <NusachHebrew />
        </div>
    </div>
</template>
