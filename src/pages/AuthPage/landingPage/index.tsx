import React from 'react';
import {Box,Typography,Grid,makeStyles,useTheme,Button} from '@material-ui/core';
import Maduka_logo from '../../../assets/images/Maduka_logo.png';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen(){
  const theme=useTheme();
  const classes=useStyles();
  const navigate=useNavigate();
  return (
   <Grid container spacing={2} className={classes.container}>
   <Grid item xs={12} sm={12} lg={6} md={6} className={classes.imgGrid}>
    <Box component={'div'} className={classes.imgCont}>
    <img src={Maduka_logo} className={classes.img}/>
    </Box>
   </Grid>
   <Grid item xs={12} sm={12} lg={4} md={6} className={classes.subGrid}>
   <Box className={classes.descCont}>
   <Typography className={classes.headTxt}>
       STUDENT PORTAL
    </Typography>
    <Typography className={classes.stud}>
    Click on the button below to proceed to portal.
    </Typography>
   <Box className={classes.btnCont}>
   <Button variant={"contained"} className={classes.btn} onClick={()=>navigate("/login")}>
      PROCEED
    </Button>
   </Box>
   </Box>
   </Grid>
   </Grid>
  )
}

const useStyles=makeStyles((theme:any)=>({
  btnCont:{
   marginTop:'15px',
  },
  btn:{
    minWidth:'120px',  
    backgroundColor:'#F7B205',
    "&:hover": {
      backgroundColor:'#492286',
      color:'#fff'   
    }
  },
  stud:{
    paddingTop:'10px',
    fontSize:'16px',
     color:'#fff',
     fontWeight:500,
     marginTop:'15px'
  },
  descCont:{
   width:'80%',
   padding:'10px',
   paddingTop:'20px',
   margin:'0 auto',
   [theme.breakpoints.down('sm')]:{
    height:'50% !important',
    width:'65% !important',
  },
  },
  headTxt:{
   fontSize:'30px',
   color:'#fff',
   fontWeight:700,
   fontFamily:'Haveltica',
   borderLeft:'5px solid  #F7B205',
   paddingLeft:'5px'
  },
container:{
 backgroundColor:'#492286',
 height:'100vh',
 display:'flex',
 flexDirection:'row',
 alignContent:'center',
 justifyContent:'center',

},
imgCont:{
  display:'flex',
  alignSelf:'center',
  margin:'0 auto',
  flexDirection:'row',
  justifyContent:'center',
  [theme.breakpoints.down('sm')]:{
    height:'100% !important'
  }
},
img:{
   width:'80%',
   [theme.breakpoints.down('sm')]:{
     height:'80% !important',
     width:'65% !important',
   }
},
imgGrid:{
  [theme.breakpoints.down('sm')]:{
    height:'50% !important'
  },
 
 },
 subGrid:{
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
    [theme.breakpoints.down('sm')]:{
     height:'50% !important',
     justifyContent:'flex-start',
   }
 }
}))