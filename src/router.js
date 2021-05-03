import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicDetails from "@/components/Certificate/CertificateForm/BasicDetails";
import Part2 from "@/components/Certificate/CertificateForm/Part2";
import FormSDGTargets from "@/components/Certificate/CertificateForm/SDGTargets";
import FormSDGs from "@/components/Certificate/CertificateForm/SDGs";
import FormSubIndustries from "@/components/Certificate/CertificateForm/SubIndustries";
import FormIndustries from "@/components/Certificate/CertificateForm/Industries";
import OrgHome from "@/components/Certificate/MyCertificates";
import Login from "@/components/Archives/Login";
import LoginPrompt from "@/components/Archives/LoginPrompt";
import InProgress from "@/components/Shared/InProgress";
import Home from "@/components/DevDebug";
import CertificateProfile from "@/components/Certificate/CertificateProfile";
import store from "@/store.js"
import OrgForm from "@/components/Organization/OrgForm";
import SignIn from "@/components/SignIn-SignUp/SignIn";
import SignUp from "@/components/SignIn-SignUp/SignUp";
import SignUpPart2 from "@/components/SignIn-SignUp/SignUp-Part2";
import SetPassword from "@/components/SignIn-SignUp/SetPassword";
import SignUpThankYou from "@/components/SignIn-SignUp/SignUp-ThankYou";
import NewsHome from "@/components/News/NewsHome";
import HomeTest from "@/components/Landing/Home"; // This is just a TEST for future LandingPage
import Dashboard from "@/components/Dashboard/Dashboard";


Vue.use(VueRouter)


function guardMyRoute(to, from, next)
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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/home',
    name: 'Home',
    beforeEnter : guardMyRoute,
    component: Home
  },
  {
    path: '/organization/home',
    name: 'OrgHome',
    beforeEnter : guardMyRoute,
    component: OrgHome,
    alias: '/'
  },
  {
    path: '/certificate',
    name: 'CertificateProfile',
    beforeEnter : guardMyRoute,
    component: CertificateProfile,
    alias: '/'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
  },
  {
    path: '/certificates/add',
    name: 'formPage1',
    beforeEnter : guardMyRoute,
    component: BasicDetails
  },
  {
    path: '/certificates/add/sdgs',
    name: 'formPage2-1',
    beforeEnter : guardMyRoute,
    component: FormSDGs
  },
  {
    path: '/certificates/add/sdgtargets',
    name: 'formPage2-2',
    beforeEnter : guardMyRoute,
    component: FormSDGTargets
  },
  {
    path: '/certificates/add/industries',
    name: 'formPage3-1',
    beforeEnter : guardMyRoute,
    component: FormIndustries
  },
  {
    path: '/certificates/add/subindustries',
    name: 'formPage3-2',
    beforeEnter : guardMyRoute,
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
