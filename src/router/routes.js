export default [
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: { isShow: true }  // footer组件是否显示
    },
    {
        name: 'search',
        path: '/search:keyWord?',
        component: () => import('@/pages/Search'),
        meta: { isShow: true }
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