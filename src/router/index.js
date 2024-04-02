import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/pages/HomePage.vue';
import SingleProjectPage from '../components/pages/SingleProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/singleproject', component: SingleProjectPage },
        { path: '/:pathMatch(.*)*', component: NotFoundPage },
    ]
});

export { router }
