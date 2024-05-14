import { createRouter, createWebHashHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../pages/HomePage.vue'),
    },
    {
      path: '/sudoku',
      name: 'Sudoku',
      component: () => import('../pages/SudokuGame.vue'),
    },
    {
      path: '/card',
      name: 'Card',
      component: () => import('../pages/CardGame.vue'),
    },
  ],
});
