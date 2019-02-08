import Vue from 'vue';
import Router from 'vue-router';
import TeamPerformanceSunburst from './views/TeamPerformanceSunburst.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/team',
      name: 'TeamPerformanceSunburst',
      component: TeamPerformanceSunburst,
    },
  ],
});
