import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue');
const Calendar = () =>
  import(/* webpackChunkName: "calendar" */ '@/views/Calendar.vue');
const Hirakana = () =>
  import(/* webpackChunkName: "hirakana" */ '@/views/Hirakana.vue');
const QRCode = () =>
  import(/* webpackChunkName: "qrcode" */ '@/views/QRCode.vue');
const WidthChecker = () =>
  import(/* webpackChunkName: "width_checker" */ '@/views/WidthChecker.vue');
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
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/hirakana',
    name: 'hirakana',
    component: Hirakana
  },
  {
    path: '/qrcode',
    name: 'QRCode',
    component: QRCode
  },
  {
    path: '/width_checker',
    name: 'widthChecker',
    component: WidthChecker
  }
];

routes.push({ name: '404', path: '*', component: NotFound });

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
