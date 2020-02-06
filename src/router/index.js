import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = ()=>import('../views/home/Home');
const Fenlei = ()=>import('../views/fenlei/Fenlei');
const Gouwuche = ()=>import('../views/gouwuche/Gouwuche');
const Profile = ()=>import('../views/profile/Profile');
const routes = [
  {
    path:"",
    redirect:'home',
  },
  {
    path:"/home",
    component:Home,
    meta:{
      title:"首页"
    }
  },
  {
    path:"/fenlei",
    component:Fenlei,
    meta:{
      title:"分类"
    }
  },
  {
    path:"/gwc",
    component:Gouwuche,
    meta:{
      title:"购物车"
    }
  },
  {
    path:"/profile",
    component:Profile,
    meta:{
      title:"我的"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(to)
  document.title = to.meta.title
  next()
})
export default router
