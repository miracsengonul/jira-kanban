import Vue from 'vue';
import VueRouter from 'vue-router';
import Kanban from '@/components/Kanban.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Kanban',
    component: Kanban
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
