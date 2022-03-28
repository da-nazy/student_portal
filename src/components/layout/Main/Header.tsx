import React,{useState,useEffect} from 'react'
import {Grid,Box,Button,useTheme,makeStyles,Typography,TextField} from '@material-ui/core';
import {BiSearchAlt} from 'react-icons/bi';
import Maduka_logo from '../../../assets/images/Maduka_logo.png';
import {AiOutlineCaretDown} from 'react-icons/ai';
import {FaBars} from 'react-icons/fa';
import { AppColor } from '../../../utilities/theme/AppColor';
import {useLocation} from 'react-router-dom';

export default function Header() {
  const classes=useStyle();
  const theme=useTheme();
  const location=useLocation();
  const[locName,setLocName]=useState('');

  useEffect(()=>{
    setName();
    console.log(locName);
  },[]);

   const setName=()=>{
     switch(location.pathname){
       case '/dashboard':
         setLocName("Dashboard");
         break;
         case '/profile':
          setLocName("Profile");
          break;
          case '/classMates':
          setLocName("Class Mates");
          break;

          case '/classDetails':
          setLocName("Class Details");
          break;
          case '/fees':
          setLocName("Fees");
          break;
          case '/results':
          setLocName("Check Result");
          break;
     }

   }
  return (
    <Box className={classes.container}>
    <Box className={classes.sideLabel}>
      <Typography className={classes.menuIcon}>
        <FaBars/>
      </Typography>
    <Typography className={classes.label}>
      {locName}
     </Typography>
    </Box>
  
   <Box className={classes.right}>

     <TextField 
       InputProps={{
        startAdornment: <BiSearchAlt/>
      }}
      className={classes.searchField}
     />
     <Box className={classes.imgCont}>
       <img src={Maduka_logo} className={classes.img}/>
       <Typography className={classes.showProfile} >
         <AiOutlineCaretDown/>
       </Typography>
     </Box>

   </Box>

    </Box>
  )
}

const useStyle=makeStyles((theme:any)=>({
  label:{
  fontWeight:700,
  fontSize:'20px',

  },
  menuIcon:{
  color:`${AppColor.primary}`,
  fontWeight:'bold',
   fontSize:'20px',
   marginRight:'10px'
  },
  sideLabel:{
  minWidth:'180px',
  display:'flex',
  flexDirection:'row',
  alignItems:'flex-end',
  height:'80%',
  },
  showProfile:{
    "&:hover":{
      cursor:'pointer',
    }
  },
  searchField:{
   width:'60%'
  },
  container:{
   height:'60px',
   paddingRight:'20px',
   paddingLeft:'20px',
   width:'100%',
   backgroundColor:'#fff',
   boxShadow:'1px 6px 5px -5px rgba(0,0,0,0.75)',
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between',
    alignItems:'center',
 
  },
  img:{
    width:'27px',
    height:'30px'
  },
  imgCont:{
   display:'flex',
   flexDirection:'row',
   borderLeft:'2px solid #bbb',
   paddingLeft:'5px',
   justifyContent:'space-between',
   alignItems:'center'
  },
  right:{
    display:'flex',
    flexDirection:'row',
    width:'200px',
   justifyContent:'space-between',
  
  }
}))