import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f96965e = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _bb940494 = () => interopDefault(import('..\\pages\\registration\\index.vue' /* webpackChunkName: "pages/registration/index" */))
const _49050700 = () => interopDefault(import('..\\pages\\dashboard\\libros\\index.vue' /* webpackChunkName: "pages/dashboard/libros/index" */))
const _c3a5c0ca = () => interopDefault(import('..\\pages\\dashboard\\users\\index.vue' /* webpackChunkName: "pages/dashboard/users/index" */))
const _076d8459 = () => interopDefault(import('..\\pages\\dashboard\\libros\\Jsus\\index.vue' /* webpackChunkName: "pages/dashboard/libros/Jsus/index" */))
const _7371344f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _5f96965e,
    name: "dashboard"
  }, {
    path: "/registration",
    component: _bb940494,
    name: "registration"
  }, {
    path: "/dashboard/libros",
    component: _49050700,
    name: "dashboard-libros"
  }, {
    path: "/dashboard/users",
    component: _c3a5c0ca,
    name: "dashboard-users"
  }, {
    path: "/dashboard/libros/Jsus",
    component: _076d8459,
    name: "dashboard-libros-Jsus"
  }, {
    path: "/",
    component: _7371344f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
