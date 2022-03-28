import React,{ReactNode} from 'react';
import {Grid,Paper,Box,useTheme,makeStyles} from '@material-ui/core';
import SideBar from './Sidebar';

type Props={
 children:ReactNode;
}
export default function AuthLayout({children}:Props){
   const theme=useTheme();
   const classes=useStyles();

    return(
     <Grid container spacing={0}  className={classes.container}>
         <Grid  item xs={12} sm={12} lg={4} md={5} className={classes.side} >
         <SideBar/>
         </Grid>
         <Grid item xs={12} sm={12} lg={8} md={7} className={classes.child}>
         {children}
         </Grid>
     </Grid>
    )

    
}
const useStyles=makeStyles((theme:any)=>({
 container:{
    gridColumn:'1fr',
    minHeight:'100vh',

 },
 side:{
 [theme.breakpoints.down('sm')]:{
   height:'230px !important',
 }
 },
 child:{
 [theme.breakpoints.down('sm')]:{
    height:'500px !important',
 }
 }
}))



