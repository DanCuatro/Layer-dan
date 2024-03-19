<script setup>
    // import { composable } from '@/mod/mod'; // Importa la función srcImage desde tu archivo imageUtils.js

    const props = defineProps({
        src:{
            type: String,
            default: ''
        }
    })

    // const processedSrc = computed(() => {
    //     return composable.utils.srcImage(props.src);
    // });
    const processedSrc = computed(() => {
        return props.src;
    });
</script>

<template>
    <img :src="processedSrc" v-bind="$attrs">
</template>
