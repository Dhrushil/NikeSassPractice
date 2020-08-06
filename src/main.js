import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VuePageTransition from 'vue-page-transition'
import firebase from 'firebase/app';
 
Vue.use(VuePageTransition)
Vue.config.productionTip = false

firebase.initializeApp( {
  apiKey: "AIzaSyDIvtq_DBb2j6F-TJdR3RjiXlnZBgY6vdg",
  authDomain: "travel-co-841db.firebaseapp.com",
  databaseURL: "https://travel-co-841db.firebaseio.com",
  projectId: "travel-co-841db",
  storageBucket: "travel-co-841db.appspot.com",
  messagingSenderId: "1059733584205",
  appId: "1:1059733584205:web:89736e400849c4afdf9f04"
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
