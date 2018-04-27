import home from '@/components/home'
import order from '@/components/order'
import userCenter from '@/components/user-center'
import testPull from '@/common/p-test-pull/test-pull'

const router = [
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
    }
  ]

export default router
