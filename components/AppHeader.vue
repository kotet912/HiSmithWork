<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script setup>

const title = 'HiSmithWork лента новостей'

useHead({
  title,
})
</script>

<style scoped>
header {
  background-color: #f8f8f8;
  padding: 16px;
  text-align: center;
}
</style>