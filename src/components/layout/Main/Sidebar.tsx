import React,{useState} from 'react'
import {Grid,Button,useTheme,makeStyles,Box,Paper, Typography} from '@material-ui/core';
import Maduka_logo from '../../../assets/images/Maduka_logo.png';
import {AiFillRocket} from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa';
import {SiGoogleclassroom} from 'react-icons/si';
import {MdOutlineClass,MdScreenSearchDesktop} from 'react-icons/md';
import {BsCashStack} from 'react-icons/bs';
import {FaLock} from 'react-icons/fa';
import { useNavigate,useLocation } from 'react-router-dom';
export default function Sidebar() {

     const theme=useTheme();
     const classes=useStyle();
     const [navHover,setNavHover]=useState(8);
     const navigate=useNavigate();
    const location=useLocation();

    const activeLink=location.pathname;

     const nav=[
         {
             icon:<AiFillRocket/>,
             name:'Dashboard',
             path:'/dashboard',
         },
         {
            icon:<FaRegUserCircle/>,
            name:'Student Profile',
            path:'/profile',
        },
        {
            icon:<SiGoogleclassroom/>,
            name:'My Class Mates',
            path:'/classMates',
        },
        {
            icon:<MdOutlineClass/>,
            name:'Class Details',
            path:'/classDetails',
        },
        {
            icon:<BsCashStack/>,
            name:'Pay Fee',
            path:'/fees',
        },
        {
            icon:<MdScreenSearchDesktop/>,
            name:'Check Result',
            path:'/results',
        },
        {
            icon:<FaLock/>,
            name:'Logout',
            path:'Logout',
        }
     ]

     const navAction=(e:any)=>{
        
        if(e.path!=='Logout'){
            navigate(e.path); 
        }else{
         // perform logout operation
        }
    }
  return (
  <Paper elevation={1} className={classes.container}>
         <Box className={classes.sideHeader}>
           <Box className={classes.subCont}>
               <img src={Maduka_logo} className={classes.img}/>
               <Typography>
                   Maduka University College
               </Typography>
           </Box>
        </Box>    
        <Box className={classes.navContainer} > 
     {nav.map((e,i)=>{
         return(
            <Box key={i} onClick={()=>navAction(e)} className={classes.navItem} onMouseOver={()=>setNavHover(i)} onMouseOut={()=>setNavHover(8)}>
            <Typography component={"i"} className={classes.icon} style={{color:`${navHover===i||activeLink===e.path?'#000':'#bbb'}`}}>
                {e.icon}
            </Typography>
            <Typography className={classes.navDesc} style={{color:`${navHover===i||activeLink===e.path?'#000':'#bbb'}`}}>
               {e.name}
            </Typography>
            </Box>
         )
     })}
      </Box>
      

  </Paper>
  )
}
 
const useStyle=makeStyles((theme:any)=>({
    icon:{
    marginRight:'10px',
    },
    navDesc:{
   fontWeight:500,
    },
    navContainer:{
   minHeight:'50%',
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',
   "&:hover":{
      cursor:'pointer',
   }
    },
    navItem:{
    height:'40px',
    width:'80%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop:'10px'
    },
    subCont:{
   height:'100%',
   display:'flex',
   flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    widthd:'80%'
    },

    img:{
        width:'50px',
        height:'50px',
        marginRight:'10px',
    },
    container:{
    height:'100%',
    borderRadius:'0px',
    },
    sideHeader:{
    height:'100px',
    width:'100%',
    backgroundColor:'#FCFCFC',
    borderBottom:'1px solid #F0F0F0',
    justifyContent:'center',
    }
}))