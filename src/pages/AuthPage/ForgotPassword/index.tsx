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
              Forgot Password
             </Typography>
            
         </Box>
         <Box>
              <Typography className={classes.stud}>
              Enter your credentials.
              </Typography>
          </Box>
           <Box className={classes.inputCont}>
             <Typography className={classes.inputLabel}>
               Email / Phone Number  
            </Typography> 
            <TextField size={"small"} variant="outlined" className={classes.input}>
            </TextField>  
           </Box>
    
           <Box className={classes.btnCont}>
               <Button className={classes.logBtn}>
                   Send
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
      marginTop:'25px',
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