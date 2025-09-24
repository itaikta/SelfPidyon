<script lang="ts" setup>
    import NusachHebrew from './NusachHebrew.vue';
    import NusachEnglishTransliteration from './NusachEnglishTransliteration.vue';
    import NusachEnglishTranslation from './NusachEnglishTranslation.vue';
    import { ref } from 'vue';
    let showLeft = ref(true);
    let transliteration = ref(true);
</script>
<template>
    <h1>Self Pidyon - Nusach</h1>
    <button v-on:click="showLeft = !showLeft" type="button" style="margin-right: 5px;"><span v-if="showLeft">Hide</span><span v-if="!showLeft">Show</span> Left Column</button>
    <button v-if="showLeft" v-on:click="transliteration = !transliteration" type="button">Show <span v-if="transliteration">Translation</span><span v-if="!transliteration">Transliteration</span></button>
    <div class="columns">
        <div v-if="showLeft" class="column">
            <NusachEnglishTransliteration v-if="transliteration" />
            <NusachEnglishTranslation v-if="!transliteration" />
        </div>
        <div class="column">
            <NusachHebrew />
        </div>
    </div>
    <p style="margin-top:20px">For background information about Self Pidyon, see our <RouterLink to="/info">Information page</RouterLink>. For the halachic source, visit our <RouterLink to="/source">Source page</RouterLink>.</p>
</template>
