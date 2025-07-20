<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/styles/app.scss';
</style> 