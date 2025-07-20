<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'HomePage',
  setup() {
    onMounted(() => {
    })
  }
})
</script>

<template>
  <div class="home">
    <section class="logo-section">
      <h1>GETBLOCK</h1>
    </section>
    <section class="top-content-section">
      <div class="top-content-wrapper">
        <div class="top-content-sub-title">
          <p>Get smart Get block</p>
        </div>
        <div class="top-content-title">
          <p>What is Getblock?</p>
        </div>
        <div class="top-content-discription">
          <p>
            Our 100% waterproof guaranteed zipper features a toothless design for reliable durability, smooth operation, easy attachment, and distinctive visual appeal.
          </p>
        </div>
        <button class="top-content-button">
          <p>Contact Us</p>
        </button>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/styles/home';
</style> 