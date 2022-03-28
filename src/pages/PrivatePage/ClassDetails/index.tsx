import React from 'react'
import MainLayout from '../../../components/layout/Main/MainLayout';
import {Grid,Typography,useTheme,makeStyles,Box} from '@material-ui/core';
import BoxCont from '../../../components/BoxCont';

export default function  ClassDetails(){
    const theme=useTheme();
    const classes=useStyle();
    return(
        <MainLayout>
         <Grid container spacing={2}>
             <Grid item lg={12} md={12} sm={12} xs={12}>
                 <BoxCont style={classes.bxCont1}>
                 <Typography className={classes.label1}>
                  CLASS: SS1 A
                 </Typography>
                 </BoxCont>
             </Grid>

             <Grid item lg={12} md={12} sm={12} xs={12}>
                 <BoxCont style={classes.bxCont2}>

                 </BoxCont>
             </Grid>
         </Grid>
        </MainLayout>
    )
}

const useStyle=makeStyles((theme:any)=>({
    bxCont2:{
        width:'100%',
        minHeight:'200px',
        padding:'20px'
    },
    bxCont1:{
        width:'100%',
        minHeight:'80px',
        padding:'20px'
       },
       label1:{
        fontWeight:700,
        fontSize:'18px',
       }
}))