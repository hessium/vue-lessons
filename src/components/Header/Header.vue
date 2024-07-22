<template>
  <nav>
    <RouterLink
        v-for="link in links"
        :to="link.path">
      <Button :label="link.name" />
    </RouterLink>
  </nav>
</template>


<script setup>
import {ref} from 'vue'

const links = ref([
  { name: "Home", path: '/'},
  { name: "Words", path: '/words'},
  { name: "Translation", path: '/translation'},
  { name: "Editor", path: '/editor'},
])
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>