<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound'
})
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>페이지를 찾을 수 없습니다</p>
    <router-link to="/" class="home-link">홈으로 돌아가기</router-link>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .home-link {
    color: #007AFF;
    text-decoration: none;
    font-size: 1.1rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
</style> 