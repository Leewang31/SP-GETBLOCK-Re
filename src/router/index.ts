import { createRouter, createWebHistory } from 'vue-router'
import type { AppRouteRecordRaw } from './types'
import Home from '@/views/Home.vue'

const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '홈'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '페이지를 찾을 수 없습니다',
      hidden: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes as any,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// 전역 네비게이션 가드
router.beforeEach((to, from, next) => {
  // 페이지 제목 설정
  document.title = `${to.meta.title || '회사 소개'} | Company Name`
  next()
})

export default router 