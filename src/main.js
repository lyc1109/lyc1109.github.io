import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import moment from 'moment'
import 'iview/dist/styles/iview.css'

require('@/assets/scss/app.scss')

Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$moment = moment

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   next()
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
