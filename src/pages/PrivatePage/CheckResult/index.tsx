import React,{useState} from 'react'
import MainLayout from '../../../components/layout/Main/MainLayout';
import { AppColor } from '../../../utilities/theme/AppColor';
import {Box,Typography,Grid,useTheme,makeStyles,Divider,Button,TextField} from '@material-ui/core';
import BoxCont from '../../../components/BoxCont';
import SelectComp from '../../../components/SelectComp';
export default function  CheckResult(){
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
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <BoxCont style={[classes.bxCont1]}>
                <Typography className={classes.typeHead2}>
                    Check Result
                   </Typography>
                   <Divider className={classes.pDivider}/>
                   <Grid container>
                   <Grid item lg={6} md={6} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                             Student Reg_No:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                             Select Session:
                             </Typography>
                             <SelectComp  style={classes.inputCont} data={[{value:'Bording',name:'Bording'},{value:'Day',name:'day'}]} value={{value:'Boarding',name:'Boarding'}} handleChange={(e:any)=>selectChange(e)}/>
                        
                                   </Box>
                    </Grid> 
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                             Select Term:
                             </Typography>
                             <SelectComp  style={classes.inputCont} data={[{value:'Bording',name:'Bording'},{value:'Day',name:'day'}]} value={{value:'Boarding',name:'Boarding'}} handleChange={(e:any)=>selectChange(e)}/>
                        
                                   </Box>
                    </Grid> 
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                             Select Class:
                             </Typography>
                             <SelectComp  style={classes.inputCont} data={[{value:'Bording',name:'Bording'},{value:'Day',name:'day'}]} value={{value:'Boarding',name:'Boarding'}} handleChange={(e:any)=>selectChange(e)}/>
                        
                                   </Box>
                    </Grid> 
                <Grid container spacing={3}>
                <Grid lg={12} md={12} sm={12} xs={12} item style={{marginTop:'auto'}} >
                   <Divider className={classes.pDivider}/>
                      <Box className={classes.typeFoot1} style={{marginTop:'20px'}}>
                      <Button className={classes.actBtn1}>
                      Submit
                       </Button>
                      </Box>
                    </Grid>
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
    pDivider:{
        color:'#bbb'
    },
    inputCont:{
        width:'95%',
        height:'40px'
        },
    label:{
        fontWeight:500,
        marginBottom:'5px',
       },
    input:{
        marginLeft:'20px',
        marginTop:'10px',
        marginBottom:'15px'
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
}))