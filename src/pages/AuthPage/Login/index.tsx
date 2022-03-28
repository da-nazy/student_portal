import React from "react";
import AuthLayout from "../../../components/layout/Auth/AuthLayout";
import {Box,Typography,makeStyles,useTheme,TextField,Button} from '@material-ui/core';
import Layout from "../../../components/layout/Auth/layout";
import Checkbox from '@mui/material/Checkbox';


const Login=()=>{
    const theme=useTheme();
    const classes=useStyles();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return(
        <AuthLayout>
            <Layout>   
            
        <Box className={classes.container}>
        <Box className={classes.head}>
             <Typography variant={"h2"} className={classes.login}>
             Login to your 
             </Typography>
             <Typography className={classes.account}>
             Account
             </Typography>
         </Box>
          <Box>
              <Typography className={classes.stud}>
              Students should login with their Registration Number.
              </Typography>
          </Box>
           <Box className={classes.inputCont}>
             <Typography className={classes.inputLabel}>
               Email / Reg. Number  
            </Typography> 
            <TextField size={"small"} variant="outlined" className={classes.input}>
            </TextField>  
           </Box>
           <Box className={classes.inputCont}>
             <Typography className={classes.inputLabel}>
              Password  
            </Typography> 
            <TextField size={"small"} color={'primary'} variant="outlined" className={classes.input} type={"password"}>
            </TextField>  
           </Box>
           <Box className={classes.rem}>
               <Typography>
               <Checkbox {...label} defaultChecked />
                   Remember me
               </Typography>
           </Box>
           <Box className={classes.btnCont}>
               <Button className={classes.logBtn}>
                   Login
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
      marginTop:'20px',
    },
    logBtn:{
      fontWeight:'bold',
      backgroundColor:'#F7B205',
      minWidth:'120px',  
      "&:hover": {
        backgroundColor:'#492286',
        color:'#fff'   
      }
    },
    rem:{
     display:'grid',
     flexDirection:'row',
   marginTop:'25px'
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
   account:{
       fontWeight:500,
       fontSize:'25px',
       marginLeft:'10px',
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
   stud:{
       paddingTop:'10px',
       fontSize:'16px',
        color:'#000'
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