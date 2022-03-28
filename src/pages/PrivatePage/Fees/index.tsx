import React,{useState} from 'react'
import MainLayout from '../../../components/layout/Main/MainLayout';
import BoxCont from '../../../components/BoxCont';
import SelectComp from '../../../components/SelectComp';
import { AppColor } from '../../../utilities/theme/AppColor';
import {Box,TextField,Typography,Grid,useTheme,makeStyles,Divider,Button} from '@material-ui/core';
export default  function Fees(){
  const theme=useTheme();
  const classes=useStyle();
  const[gender,setGender]=useState({value:'Female',name:'Female'});
     const selectChange=(e:any)=>{
         console.log(e)
      setGender(e);
     }
    return(
       <MainLayout>
     <Grid container spacing={2}>
     <Grid item lg={10} md={11} sm={12} xs={12}>
      <BoxCont style={[classes.bxCont1]}>
      <Typography className={classes.typeHead2}>
                     Select Details Below To Get Fees To Pay
                   </Typography>
                   <Divider className={classes.pDivider}/>
                  <Grid container>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Session:
                             </Typography>
                             <SelectComp  style={classes.inputCont} data={[{value:'Bording',name:'Bording'},{value:'Day',name:'day'}]} value={{value:'Boarding',name:'Boarding'}} handleChange={(e:any)=>selectChange(e)}/>
                        
                                   </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Term:
                             </Typography>
                             <SelectComp  style={classes.inputCont} data={[{value:'Bording',name:'Bording'},{value:'Day',name:'day'}]} value={{value:'Boarding',name:'Boarding'}} handleChange={(e:any)=>selectChange(e)}/>
                        
                                   </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Class:
                             </Typography>
                             <SelectComp  style={classes.inputCont} data={[{value:'Bording',name:'Bording'},{value:'Day',name:'day'}]} value={{value:'Boarding',name:'Boarding'}} handleChange={(e:any)=>selectChange(e)}/>
                        
                                   </Box>
                    </Grid> 
                    <Grid lg={12} md={12} sm={12} xs={12} item style={{marginTop:'auto'}} >
                   <Divider className={classes.pDivider}/>
                      <Box className={classes.typeFoot1} style={{marginTop:'20px'}}>
                      <Button className={classes.actBtn1}>
                      Submit
                       </Button>
                      </Box>
                    </Grid>
                  </Grid>
      </BoxCont>
     </Grid>
     </Grid>
       </MainLayout>
       
    )
}

const useStyle=makeStyles((theme:any)=>({ 
  actBtn1:{
    fontWeight:700,
    color:'#fff',
    fontSize:'10px',
    backgroundColor:`${AppColor.lightPrimary}`,
    marginBottom:'5px',
   "&:hover":{
       backgroundColor:`${AppColor.primary}`,
       boxShadow: '1px 1px 11px 6px rgba(0,0,0,0)',  
   }
 },
     typeFoot1:{
        height:'20%',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingRight:'10px',
     },
    bxCont1:{
     width:'100%',
     minHeight:'200px'
    },
    typeHead2:{
      height:'50px',
      paddingLeft:'20px',
      display:'flex',
     alignItems:'center',
      flexDirection:'row',
      fontWeight:700,
      color: 'rgba(0, 0, 0, 0.5)',
      
  },
    
  pDivider:{
    color:'#bbb'
},
input:{
  marginLeft:'20px',
  marginTop:'5px',
  marginBottom:'15px'
  },
  inputCont:{
    width:'95%',
    height:'40px'
    },
    label:{
     fontWeight:500,
     marginBottom:'5px',
    },
}))