import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './Routes/HomePage.vue';
import LocalizacaoPage from './Routes/LocalizacaoPage.vue';
import ContactPage from './Routes/ContactPage.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/Localização',
    name: 'Localização',
    component: LocalizacaoPage
  },
  {
    path: '/Contato',
    name: 'Contato',
    component: ContactPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;