import ForgotPassword from '../../pages/AuthPage/ForgotPassword/index';
import SplashScreen from '../../pages/AuthPage/landingPage/index';
import Login from '../../pages/AuthPage/Login/index';
import Profile from '../../pages/PrivatePage/Profile/index';
import Dashboard from '../../pages/PrivatePage/Dashboard/index';
import ClassMates from '../../pages/PrivatePage/ClassMates/index';
import ClassDetails from '../../pages/PrivatePage/ClassDetails/index';
import Fees from '../../pages/PrivatePage/Fees/index';
import CheckResult from '../../pages/PrivatePage/CheckResult';
import EnterOtp from '../../pages/AuthPage/Otp';
const authPages=[
{
    path:'/',
    Element:SplashScreen,
    name:'Landing Page',
},
   {
       path:'/login',
       Element:Login,
       name:'Login'
   } ,
  {
       path:'/reset_password',
       Element:ForgotPassword,
       name:'ForgotPassword'
   },
   {
    path:'otp',
    Element:EnterOtp,
    name:'Enter Otp',
}

]

const mainPages=[
    {
     path:'/dashboard',
     Element:Dashboard,
     name:'Dashboard',
    },
    {
        path:'/profile',
        Element:Profile,
        name:'Student Profile'
    },
    {
        path:'/classMates',
        Element:ClassMates,
        name:'My class Mates',
    },
    {
        path:'/classDetails',
        Element:ClassDetails,
        name:'Class Details',
    },
    {
        path:'/fees',
        Element:Fees,
        name:'Pay Fees'
    },
    {
        path:'/results',
        Element:CheckResult,
        name:'Check Result'
    },
   
    // logout should be add sidebar
]

export {authPages,mainPages}