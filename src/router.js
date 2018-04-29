import Vue from 'vue';
import Router from 'vue-router';
import Constructor from './views/Constructor.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'constructor',
      component: Constructor
    }
  ]
});
