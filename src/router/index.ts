import NProgress from 'nprogress'
import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '../layout/index.vue'

const pages = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
  },
]

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: 'home',
    children: pages,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition
      } else {
        if (from.meta.saveSrollTop) {
          const top: number = document.documentElement.scrollTop || document.body.scrollTop
          resolve({ left: 0, top })
        }
      }
    })
  },
})

router.beforeEach(to => {
  NProgress.start()
  to.meta.title ? (document.title = to.meta.title as string) : '' // 动态title
})

router.afterEach(() => {
  NProgress.done()
})

export default router