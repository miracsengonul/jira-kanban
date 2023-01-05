import Vue from 'vue';
import VueRouter from 'vue-router';
import Kanban from '@/components/Kanban.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Kanban',
    component: Kanban,
    meta: {
      title: 'Kanban Page'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta.title;
  next();
});
export default router;
