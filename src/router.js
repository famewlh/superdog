import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from './components/layout/DefaultPage'
import Index from './components/pages/Index'
import About from './components/pages/About'
import Dog from './components/pages/Dog'
import Cat from './components/pages/Cat'
import Know from './components/pages/Know'
import Service from './components/pages/Service'
import Video from './components/pages/Video'
import Show from './components/pages/Show'
import Buy from './components/pages/Buy'
import Contact from './components/pages/Contact'
import Detail from './components/pages/Detail'



Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'default',
    //   component: defaultPage,
    //   redirect: '/index',
    //   children: [{
    //     path: 's/:name',
    //     name: 'goods',
    //     component: goodsList
    //   }]
    // }
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
        }]
    }
  ]
})