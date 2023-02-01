import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHistory } from 'vue-router'

loadFonts()

import BookResellView from './views/BookResellView.vue'
import HomeView from './views/HomeView.vue'
import AboutViewVue from './views/AboutView.vue'
import WelcomeView from './views/WelcomeView.vue'
import NotesView from './views/NotesCards.vue'
import FilterMenu from './globalcomponents/BookListingsFilter.vue'
import NavBar from './globalcomponents/NavBar.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/bookresell', component:BookResellView },
    { path: '/home', component: HomeView },
    { path: '/about', component: AboutViewVue },
    { path: '/', component: WelcomeView },
    { path: '/notes', component: NotesView },
  ]

});

createApp(App).use(router)
  .use(vuetify)
  .mount('#app')
  .component('nav-bar', NavBar)
  .component('filter-menu', FilterMenu)