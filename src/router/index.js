import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Clients from '../views/Clients.vue'
import Work from '../views/Work.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/clients', name: 'Clients', component: Clients },
  { path: '/work', name: 'Work', component: Work },
  { path: '/contact', name: 'Contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
