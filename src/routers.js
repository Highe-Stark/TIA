import Major from './components/Majors'
import Class from './components/Class'
import majors from './components/majors'

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
]

export default routers