<script setup>
  import { useCounterStore } from '@/stores/counter'
  const counter = useCounterStore()
  const store = Stores
  // const useCounterStore = store.useCounterStore()
  console.log(store)
</script>

<template>
  <div>
    <div>Current Count: {{ counter.count }}</div>
    <button @click="counter.increment()">Click</button>
  </div>
</template>
