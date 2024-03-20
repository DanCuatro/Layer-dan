<template>
    <UiSwiperTheme >
        <swiper-slide v-for="(item, index) in items" :key="index">
            <slot :item="item"></slot>
        </swiper-slide>
    </UiSwiperTheme>  
</template>
  
<script setup>
    const props = defineProps({
        items:{
            type: Array
        }
    })
       
</script>
  