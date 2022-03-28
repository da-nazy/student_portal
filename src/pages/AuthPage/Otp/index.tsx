import React from "react";
import AuthLayout from "../../../components/layout/Auth/AuthLayout";
import {Box,Paper,Grid,Typography,makeStyles,useTheme,TextField,Button} from '@material-ui/core';
import Layout from "../../../components/layout/Auth/layout";
import Checkbox from '@mui/material/Checkbox';


const Login=()=>{
    const theme=useTheme();
    const classes=useStyles();
    return(
        <AuthLayout>
            <Layout>   
            
        <Box className={classes.container}>
        <Box className={classes.head}>
             <Typography variant={"h2"} className={classes.login}>
              Reset Password
             </Typography>
            
         </Box>
         <Box>
              <Typography className={classes.stud}>
              Enter one time pin sent to you. 
              </Typography>
          </Box>
           <Box className={classes.inputCont}>
             <Typography className={classes.inputLabel}>
               Enter OTP:  
            </Typography> 
            <TextField size={"small"} variant="outlined" className={classes.input}>
            </TextField>  
           </Box>
    
           <Box className={classes.btnCont}>
               <Button className={classes.logBtn}>
                   Reset
               </Button>
               <Button className={classes.logBtn}>
                 Change Email/Phone
               </Button>
           </Box>
        </Box>

            </Layout>
        </AuthLayout>
       
    )
}

export default Login;

const useStyles=makeStyles((theme:any)=>({
    btnCont:{
      marginTop:'30px',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      [theme.breakpoints.down('xs')]:{
          flexDirection:'column',
         
      }
    },
    logBtn:{
      fontWeight:'bold',
      backgroundColor:'#F7B205',
      minWidth:'120px',  
      "&:hover": {
        backgroundColor:'#492286',
        color:'#fff'   
      },
      [theme.breakpoints.down('xs')]:{
          minWidth:'100%',
          marginTop:'20px',
      }
    },
    stud:{
      paddingTop:'10px',
      fontSize:'16px',
       color:'#000'
  },
    container:{
    paddingLeft:'10px',
    paddingRight:'10px',
    },
   login:{
    fontSize:'30px',
    fontWeight:700,
    fontFamily:'sans-serif',
  
   },
  
   head:{
       display:'flex',
       flexDirection:'row',
       alignItems:'flex-end' ,
       alignContent:'center',
       borderLeft:'5px solid #F7B205',
       paddingLeft:'10px',
       letterSpacing:'4px',
       margin:'3px'
   },
  
   inputLabel:{
       color:'#505050',
       fontSize:'16px',
       fontWeight:700,
   },
   input:{
   height:'20px',
  width:'100%',
   },
   inputCont:{
       marginTop:'25px',
       height:'50px',
       display:'flex',
       flexDirection:'column',
       justifyContent:'space-between',
       marginBottom:'10px'
   }
}))