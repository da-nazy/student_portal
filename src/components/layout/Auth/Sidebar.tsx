import React from 'react'
import {Grid,Paper,useTheme,makeStyles,Box} from '@material-ui/core';
import Maduka_logo from '../../../assets/images/Maduka_logo.png'
export default function Sidebar() {
    const theme=useTheme();
    const classes=useStyles();
  return (
    <Box component={'div'} className={classes.container}>
     <Box component={'div'} className={classes.imgCont} >
    <img src={Maduka_logo} className={classes.img}/>
     </Box>
    </Box>
  )
}

const useStyles=makeStyles((theme:any)=>({
 container:{
backgroundColor:'#492286',
height:'100%',
display:'grid',
flexDirection:'column',
 alignItems:'center',
 justifyContent:"center",
 },
 imgCont:{
  width:'100%',
  height:'250px'
 },
 img:{
     width:'100%',
     height:'100%'
 }
}))