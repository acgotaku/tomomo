import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue');
const Convert = () =>
  import(/* webpackChunkName: "convert" */ '@/views/Convert.vue');
const NotFound = () =>
  import(/* webpackChunkName: "not_found" */ '@/views/NotFound.vue');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/convert',
    name: 'convert',
    component: Convert
  }
];

routes.push({ name: '404', path: '*', component: NotFound });

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
