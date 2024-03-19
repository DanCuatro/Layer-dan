<script setup>
    const props = defineProps({
        title: String
    });
    
    const showContent = ref(false);
    
    const toggleSection = () => {
        showContent.value = !showContent.value;
    };
</script>
  
<template>
    <div v-auto-animate>
        <div @click="toggleSection" class="cursor-pointer flex justify-between items-center  pb-1 pt-4 border-b px-1  hover:bg-gray-50">
            <h3 class="text-lg font-semibold">{{ title }}</h3>
            <icon v-if="showContent" name="fa-solid:caret-up" color="black" class="h-4 w-4"/>
            <icon v-else name="fa-solid:caret-down" color="black" class="h-4 w-4"/>
        </div>
        <div v-if="showContent">
            <slot></slot>
        </div>
    </div>
</template>