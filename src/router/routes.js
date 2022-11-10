export default [
    {
        path: '/home',
        component: () => import('@/pages/Home'),
    },
    {
        path: '/search',
        component: () => import('@/pages/Search'),
    },
    {
        path: '/login',
        component: () => import('@/pages/Login'),
    },
    {
        path: '/register',
        component: () => import('@/pages/Register'),
    },
    {
        path: '*',
        redirect: '/home',  //重定向
    },
]