import home from '@/components/home'
import login from '@/components/login'
import order from '@/components/order'
import pay from '@/components/pay'
import shopping from '@/components/shopping'
import userCenter from '@/components/user-center'
import testPull from '@/common/p-test-pull/test-pull'


const routes = [
    {
      path: '/',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/home',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/userCenter',
      name: '个人中心',
      component: userCenter,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/order/:id',
      name: '我的订单',
      component: order,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/testPull',
      name: '下拉刷新',
      component: testPull,
      meta: {
        title: '下拉刷新'
      }
    },
    {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {
        title: '支付'
      }
    },
    {
      path: '/shopping',
      name: '购物',
      component: shopping,
      meta: {
        title: '购物'
      }
    }
  ]

export default routes
