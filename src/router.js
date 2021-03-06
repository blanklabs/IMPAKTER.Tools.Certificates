import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicDetails from "@/components/Certificate/CertificateForm/BasicDetails";
import Part2 from "@/components/Certificate/CertificateForm/Part2";
import FormSDGTargets from "@/components/Certificate/CertificateForm/SDGTargets";
import FormSDGs from "@/components/Certificate/CertificateForm/SDGs";
import FormIndustrySectors from "@/components/Certificate/CertificateForm/IndustrySectors";
import FormIndustries from "@/components/Certificate/CertificateForm/Industries";
import CertificatesTable from "@/components/Certificate/CertificatesTable";
import Login from "@/components/Archives/Login";
import LoginPrompt from "@/components/Archives/LoginPrompt";
import InProgress from "@/components/Shared/InProgress";
import Home from "@/components/DevDebug";
import CertificateProfile from "@/components/Certificate/CertificateProfile";
//import store from "@/store.js"
import OrgForm from "@/components/Organization/OrgForm";
import OrgProfile from "@/components/Organization/OrgProfile";
import SignIn from "@/components/Account/SignIn";
import SignUp from "@/components/Account/SignUp";
import SignUpPart2 from "@/components/Account/SignUp-Part2";
import SetPassword from "@/components/Account/SetPassword";
import SignUpThankYou from "@/components/Account/SignUp-ThankYou";
import NewsHome from "@/components/News/NewsHome";
import HomeTest from "@/components/Landing/Home"; // This is just a TEST for future LandingPage
import Dashboard from "@/components/Dashboard/Dashboard";
import PublicationsHome from "@/components/Publications/PublicationsHome"
import UploadPublication from "@/components/Publications/UploadPublication"
import MatchesHome from "@/components/Matches/MatchesHome"
import LibraryHome from "@/components/Library/LibraryHome"
import Contact from "@/components/Contact.vue"
import UserForm from "@/components/User/UserForm"
import UserProfile from "@/components/User/UserProfile"
import HowItWorks from "@/components/HowitWorks"
import FAQ from "@/components/FAQ"


Vue.use(VueRouter)

function authGuard(to, from, next) {
  window.scrollTo(0, 0);
  if (!window.localStorage.getItem('accessToken')) {
    next('/signin');
  }
  else next();
}


const routes = [

  {  // This is just a TEST for future LandingPage
    path: '/test',
    name: 'HomeTest',
    component: HomeTest,
    alias: '/'
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
    beforeEnter: authGuard,
    component: NewsHome
  },
  {
    path: '/publications',
    name: 'Publicatons',
    beforeEnter: authGuard,
    component: PublicationsHome
  },
  {
    path: '/publications/upload',
    name: 'UploadPublication',
    beforeEnter: authGuard,
    component: UploadPublication
  },
  {
    path: '/matches',
    name: 'Matches',
    beforeEnter: authGuard,
    component: MatchesHome
  },
  {
    path: '/library',
    name: 'Library',
    beforeEnter: authGuard,
    component: LibraryHome
  },
  {
    path: '/org/edit',
    name: 'EditOrg',
    component: OrgForm
  },
  {
    path: '/org/profile',
    name: 'OrgProfile',
    component: OrgProfile
  },
  {
    path: '/user/edit',
    name: 'EditUser',
    component: UserForm
  },
  {
    path: '/user/profile',
    name: 'UserProfile',
    component: UserProfile
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
    beforeEnter: authGuard,
    component: Dashboard
  },
  {
    path: '/home',
    name: 'Home',
    beforeEnter: authGuard,
    component: Home
  },
  {
    path: '/certificates',
    name: 'CertificatesTable',
    beforeEnter: authGuard,
    component: CertificatesTable
  },
  {
    path: '/certificate',
    name: 'CertificateProfile',
    beforeEnter: authGuard,
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
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/howitworks',
    name: 'HowItWorks',
    component: HowItWorks,
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/certificates/add',
    name: 'formPage1',
    beforeEnter: authGuard,
    component: BasicDetails
  },
  {
    path: '/certificates/add/sdgs',
    name: 'formPage2-1',
    beforeEnter: authGuard,
    component: FormSDGs
  },
  {
    path: '/certificates/add/sdgtargets',
    name: 'formPage2-2',
    beforeEnter: authGuard,
    component: FormSDGTargets
  },
  {
    path: '/certificates/add/industries',
    name: 'formPage3-1',
    beforeEnter: authGuard,
    component: FormIndustries
  },
  {
    path: '/certificates/add/subindustries',
    name: 'formPage3-2',
    beforeEnter: authGuard,
    component: FormIndustrySectors
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
