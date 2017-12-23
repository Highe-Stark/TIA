import Major from './components/Majors'

const routers = [
    {
        path: '/Major',
        name: 'Major',
        component: Major
    },
    {
        path: '/',
        component: Major
    },
]

export default routers