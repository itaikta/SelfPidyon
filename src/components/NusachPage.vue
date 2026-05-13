<script lang="ts" setup>
    import { ref } from 'vue';
    import { usePreferredDark } from '@vueuse/core';
    import NusachHebrew from './NusachHebrew.vue';
    import NusachEnglishTransliteration from './NusachEnglishTransliteration.vue';
    import NusachEnglishTranslation from './NusachEnglishTranslation.vue';
    import PdfButton from './PdfButton.vue';
    
    let showLeft = ref(true);
    let transliteration = ref(true);
    let preferDark = ref(usePreferredDark().value);
    let preferHighContrast = ref(true);

    function getColumnsId(preferDark: boolean, preferHighContrast: boolean) {
        if (preferDark) {
            if (preferHighContrast) return 'columnsDarkHigh';
            else return 'columnsDarkLow';
        }
        else {
            if (preferHighContrast) return 'columnsLightHigh';
            else return 'columnsLightLow';
        }
    }
</script>

<template>
    <h1>Self Pidyon - Nusach</h1>
    <button v-on:click="showLeft = !showLeft" type="button" style="margin-right: 5px;"><span v-if="showLeft">Hide</span><span v-if="!showLeft">Show</span> Left Column</button>
    <button v-if="showLeft" v-on:click="transliteration = !transliteration" type="button">Show <span v-if="transliteration">Translation</span><span v-if="!transliteration">Transliteration</span></button>
    <div id="backgroundSelector">
        <button v-on:click="preferDark = !preferDark" style="padding-right: 4px; border-radius: 10px 0 0 10px;">
            <span v-if="!preferDark">Theme: Light ☀️</span>
            <span v-if="preferDark">Theme: Dark 🌙</span>
        </button>
        <button v-on:click="preferHighContrast = !preferHighContrast" style="padding-left: 4px; border-radius: 0 10px 10px 0;">
            <span v-if="preferHighContrast">Contrast: High ⬆️</span>
            <span v-if="!preferHighContrast">Contrast: Low ⬇️</span>
        </button>
    </div>
    <div :id="getColumnsId(preferDark, preferHighContrast)">
        <div v-if="showLeft" class="column" style="padding-left: 15px;">
            <NusachEnglishTransliteration v-if="transliteration" />
            <NusachEnglishTranslation v-if="!transliteration" />
        </div>
        <div class="column" style="padding-right: 15px;">
            <NusachHebrew />
        </div>
    </div>
    <PdfButton />

    <hr style="margin-top: 25px;" />
    <p>For background information about Self Pidyon, see our <RouterLink to="/info">Information page</RouterLink>. For the halachic source, visit our <RouterLink to="/source">Source page</RouterLink>.</p>
</template>
