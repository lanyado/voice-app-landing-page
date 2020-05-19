import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false

/////
//set the language 
router.beforeEach((to,from,next)=>{

  //use the language from the routing param 
  let language = to.params.lang;
  if (!language){
    language= 'he'     
  }
  
  //set the current language for i18n
  i18n.locale = language
  next()
  })
  /////


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

