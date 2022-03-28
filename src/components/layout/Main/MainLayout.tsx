import React,{ReactNode} from 'react';
import {Grid,Paper,useTheme,makeStyles} from '@material-ui/core';
import Menu from './Menu';
import Sidebar from './Sidebar';
type Props={
    children:ReactNode,
}
export default function MainLayout({children}:Props){
    // raps the sidebar and submenu
    const theme=useTheme();
    const classes=useStyle();
    return(
      <Grid container className={classes.container} >
          <Grid item lg={3} sm={12} xs={12} md={3} className={classes.sideCont}>
          <Sidebar/>
          </Grid>
          <Grid item lg={9} sm={12} xs={12} md={12} >
          <Menu>
           {children}
          </Menu>
          </Grid>
      </Grid>
    )
}

const useStyle=makeStyles((theme:any)=>({
    container:{
    minHeight:'100vh',
    },
    sideCont:{
     [theme.breakpoints.down('md')]:{
         display:'none'
     }
    }

}))