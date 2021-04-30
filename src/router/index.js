import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicDetails from "@/components/CertificateForm/BasicDetails";
import Part2 from "@/components/CertificateForm/Part2";
import FormSDGTargets from "@/components/CertificateForm/SDGTargets";
import FormSDGs from "@/components/CertificateForm/SDGs";
import FormSubIndustries from "@/components/CertificateForm/SubIndustries";
import FormIndustries from "@/components/CertificateForm/Industries";
import OrgHome from "@/components/Organization/OrgHome";
import Login from "@/components/Shared/Login";
import LoginPrompt from "@/components/Shared/LoginPrompt";
import InProgress from "@/components/Shared/InProgress";
import Home from "@/components/Home";
import CertificateProfile from "@/components/CertificateProfile";
import store from "@/store/index.js"
import OrgForm from "@/components/OrgForm";
import SignIn from "@/components/SignIn-SignUp/SignIn";
import SignUp from "@/components/SignIn-SignUp/SignUp";
import SignUpPart2 from "@/components/SignIn-SignUp/SignUp-Part2";
import SetPassword from "@/components/SignIn-SignUp/SetPassword";
import SignUpThankYou from "@/components/SignIn-SignUp/SignUp-ThankYou";
import NewsHome from "@/components/News/NewsHome";
import HomeTest from "../components/Home/Home"; // This is just a TEST for future LandingPage

Vue.use(VueRouter)


function guardMyroute(to, from, next)
{

if(localStorage.getItem('OrganizationID') == null)
  { console.log(localStorage.getItem("OrganizationID"))
    next('/prompt');
  }

else if(store.state.organizationID == null){
  next('/wait');
}
 else next();

}


const routes = [
 
  {  // This is just a TEST for future LandingPage
    path: '/test',
    name: 'HomeTest',
    component: HomeTest
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signin',
    name: 'Sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'Sign-up',
    component: SignUp
  },
  {
    path: '/signup/continue',
    name: 'Sign-up-Part2',
    component: SignUpPart2
  },
  {
    path: '/signup/thankyou',
    name: 'Sign-up-Thankyou',
    component: SignUpThankYou
  },
  {
    path: '/signup/setpassword',
    name: 'SetPassword',
    component: SetPassword
  },
  {
    path: '/news',
    name: 'News',
    component: NewsHome
  },
  {
    path: '/profile/edit',
    name: 'EditProfile',
    component: OrgForm
  },
  {
    path: '/prompt',
    name: 'LoginPromt',
    component: LoginPrompt
  },
  {
    path: '/wait',
    name: 'InProgress',
    component: InProgress
  },
  {
    path: '/home',
    name: 'Home',
    beforeEnter : guardMyroute,
    component: Home
  },
  {
    path: '/organization/home',
    name: 'OrgHome',
    beforeEnter : guardMyroute,
    component: OrgHome,
    alias: '/'
  },
  {
    path: '/certificate',
    name: 'CertificateProfile',
    beforeEnter : guardMyroute,
    component: CertificateProfile,
    alias: '/'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
  {
    path: '/certificates/add',
    name: 'formPage1',
    beforeEnter : guardMyroute,
    component: BasicDetails
  },
  {
    path: '/certificates/add/sdgs',
    name: 'formPage2-1',
    beforeEnter : guardMyroute,
    component: FormSDGs
  },
  {
    path: '/certificates/add/sdgtargets',
    name: 'formPage2-2',
    beforeEnter : guardMyroute,
    component: FormSDGTargets
  },
  {
    path: '/certificates/add/industries',
    name: 'formPage3-1',
    beforeEnter : guardMyroute,
    component: FormIndustries
  },
  {
    path: '/certificates/add/subindustries',
    name: 'formPage3-2',
    beforeEnter : guardMyroute,
    component: FormSubIndustries
  },
  {
    path: '/certificates/add/part2',
    name: 'formPart2',
    //beforeEnter : guardMyroute,
    component: Part2
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
