import Major from './components/Major'
import Class from './components/Class'
import majors from './components/majors.vue'
import DoC from './components/DoC'
import DoM from './components/DoM'
import qaIndex from './components/qa-index'
import qaDetail from './components/qa-detail'
import layout from './components/layout'
import download from './components/download'

const routers = [
    {
        path: '/Major',
        name: 'Major',
        component: Major,
        children : [
            {
                path: '/',
                component: majors
            },
            {
                path: '/',
                component: Class
            }
        ]
    },
    {
        path: '/',
        component: Major,
        children: [
            {
                path: '/',
                component: majors
            }
        ]
    },
    {
      path: '/DoC',
      name: 'DoC',
      component: DoC
    },
    {
      path: '/DoM',
      name: 'DoM',
      component: DoM
    },
    {
      path: '/download',
      name: 'download',
      component: download

    },
    {
      path: '/qaIndex',
      name: 'qaIndex',
      component: qaIndex
    },
    {
      path :'/qaIndex/detail/:id',
      name: 'qaDetail',
      component: qaDetail
    },
    {
      path :'/layout',
      name:'layout',
      component: layout
    }
]

export default routers
