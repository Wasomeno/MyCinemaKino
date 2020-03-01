import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Details from './components/Details.vue'
import Home from './components/HelloWorld.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/details/:movieid', component: Details, name: 'details' },
  { path: '/', component: Home }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
