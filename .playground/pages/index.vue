<script setup>
  const currenPage = ref(1)
  const pageSize = ref(12)
  const total = ref(301)
</script>

<template>
  <div>
    <UiPagination
      :currentPage="currenPage"
      :pageSize="pageSize"
      :total="total"
      />
  </div>
</template>
