// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAqsSl3QcMXtc41FBDORErTdq2Z-caKD_s",
  authDomain: "unified-altar-368201.firebaseapp.com",
  projectId: "unified-altar-368201",
  storageBucket: "unified-altar-368201.appspot.com",
  messagingSenderId: "178309508494",
  appId: "1:178309508494:web:caeb69b279b0f8e168c8df",
  measurementId: "G-J1LK806V5E"
};

firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
