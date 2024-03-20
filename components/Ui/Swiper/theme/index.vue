<script setup>
    import { ref } from 'vue';

    const progressCircle = ref(null);
    const progressContent = ref(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.value.style.setProperty('--progress', 1 - progress);
        progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };     
</script>
  
<template>
        <swiper
            :autoHeight="true"
            :slidesPerView="1"
            :spaceBetween="30"
            :loop="true"
            :pagination="{
                clickable: true,
            }"
            :modules="[SwiperAutoplay, SwiperNavigation]"
        
            :breakpoints="{
                '768': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '1024': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                '1320': {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }"

            :centeredSlides="true"
            :grabCursor="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
    
            @autoplayTimeLeft="onAutoplayTimeLeft"
        >
            <slot></slot>
            <template #container-end>
                <div class="hidden">
                    <div class="autoplay-progress">
                    <svg viewBox="0 0 48 48" ref="progressCircle">
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref="progressContent"></span>
                    </div>
                </div>
            </template>
        </swiper>
</template>