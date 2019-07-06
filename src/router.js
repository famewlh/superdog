import Vue from 'vue'
import Router from 'vue-router'

var defaultPage = () => import('./components/layout/DefaultPage')
var Index = () => import('./components/pages/Index')
var About = () => import('./components/pages/About')
var Dog = () => import('./components/pages/Dog')
var Cat = () => import('./components/pages/Cat')
var Know = () => import('./components/pages/Know')
var Video = () => import('./components/pages/Video')
var Show = () => import('./components/pages/Show')
var Buy = () => import('./components/pages/Buy')
var Contact = () => import('./components/pages/Contact')
var Detail = () => import('./components/pages/Detail')
var Service = () => import('./components/pages/Service')
var Solve = () => import('./components/pages/Solve')

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'default',
        component: defaultPage,
        redirect: 'Index',
        children: [{
          path: 'index',
          name: 'Index',
          component: Index, 
        },{
          path: 'about',
          name: 'About',
          component: About,
        },{
          path: 'dog',
          name: 'Dog',
          component: Dog, 
        },{
          path: 'cat',
          name: 'Cat',
          component: Cat,
        },{
          path: 'know',
          name: 'Know',
          component: Know,
        },{
          path: 'service',
          name: 'Service',
          component: Service,
        },{
          path: 'video',
          name: 'Video',
          component: Video, 
        },{
          path: 'show',
          name: 'Show',
          component: Show,
        },{
          path: 'buy',
          name: 'Buy',
          component: Buy,
        },{
          path: 'contact',
          name: 'Contact',
          component: Contact,
        },{
          path: '/detail/:id',
          name: 'Detail',
          component: Detail
        },{
          path: '/solve/:id',
          name: 'Solve',
          component: Solve
        }]
    }
  ]
})