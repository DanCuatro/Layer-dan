<script setup>
    const props = defineProps({
        src:{
            type: String,
            default: ''
        }
    })

    export function srcImage(src) {
      const defaultImage ='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
      const isString = typeof src === 'string' || src instanceof String;
      if (!isString) return defaultImage;
      const first4 = src.slice(0, 4);
      const env = useRuntimeConfig();
      const bucket = env.public.bucket;
      console.log(bucket)
      return first4 == 'http' ? src : bucket + src;
    }

    const processedSrc = computed(() => {
        return srcImage(props.src);
    });
</script>

<template>
    <img :src="processedSrc" v-bind="$attrs">
</template>
