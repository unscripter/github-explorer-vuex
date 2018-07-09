import Vue from 'vue'
import Router from 'vue-router'
import ProfileView from './views/ProfileView.vue'
// import About from './views/About.vue'
import App from './App'
// import RepoList from '@/components/RepoList'
// import RepoDetail from '@/components/RepoDetails'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: ProfileView,
      children: [
          {
              path: 'user/:username',
              name: 'USER_DETAIL',
              component: ProfileView
          },
          {
              path: '*',
              redirect: {
                  name: 'App',
                  params: {
                      username: 'AmitMundra54'
                  }
              }
          }
      ]
  },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // }
  ]
})
