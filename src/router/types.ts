import type { RouteRecordRaw } from 'vue-router'

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'children'> {
  name: string
  meta?: {
    title?: string
    icon?: string
    hidden?: boolean
  }
  children?: AppRouteRecordRaw[]
} 