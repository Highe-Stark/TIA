import Major from './components/Major'
import Class from './components/Class'
import majors from './components/majors.vue'
import DoM from './components/DoM'

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
      path: '/DoM',
      name: 'DoM',
      component: DoM
    }
]

export default routers
