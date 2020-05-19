import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import contact from '../components/contact.vue'
import i18n from '../i18n'

Vue.use(VueRouter)


  const routes = [    
      {
        path: '/',
        redirect: `/${i18n.locale}`
        // redirect: `/en`
      },
      {
        path:'/:lang',
        component: {
          render (c) { return c('router-view') }
        },
        children:[
        {
          path: '/',
          name: 'Home',
          component: Home
        }, 
        {
          path: 'contact',
          name: 'contact',
          component: contact
        }, 
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router