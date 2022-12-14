import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _add3e57c = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _39e903a5 = () => interopDefault(import('..\\pages\\registration\\index.vue' /* webpackChunkName: "pages/registration/index" */))
const _3bbbd3f1 = () => interopDefault(import('..\\pages\\dashboard\\libros\\index.vue' /* webpackChunkName: "pages/dashboard/libros/index" */))
const _77fd960a = () => interopDefault(import('..\\pages\\dashboard\\users\\index.vue' /* webpackChunkName: "pages/dashboard/users/index" */))
const _ce493418 = () => interopDefault(import('..\\pages\\dashboard\\libros\\regislibros\\index.vue' /* webpackChunkName: "pages/dashboard/libros/regislibros/index" */))
const _66d2b87e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _add3e57c,
    name: "dashboard"
  }, {
    path: "/registration",
    component: _39e903a5,
    name: "registration"
  }, {
    path: "/dashboard/libros",
    component: _3bbbd3f1,
    name: "dashboard-libros"
  }, {
    path: "/dashboard/users",
    component: _77fd960a,
    name: "dashboard-users"
  }, {
    path: "/dashboard/libros/regislibros",
    component: _ce493418,
    name: "dashboard-libros-regislibros"
  }, {
    path: "/",
    component: _66d2b87e,
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
