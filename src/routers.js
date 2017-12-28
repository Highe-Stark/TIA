import Home from './components/home'
import layout from './components/layout'

const routers = [
  {
    path: '/home',
    name: 'home',
    component : Home,
    children: [
      {
        path: '/',
        component: layout
      }
    ]
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: layout
      }
    ]
  }
]

export default routers
