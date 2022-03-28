import React from 'react'
import {Box,useTheme,makeStyles, Typography} from '@material-ui/core';
export default function Footer() {
    const classes=useStyle();
    const theme=useTheme();
  return (
    <Box className={classes.container}>
  <Typography className={classes.label}>
    Maduka University College 2022
  </Typography>
    </Box>
  )
}

const useStyle=makeStyles((theme:any)=>({
    container:{
        height:'60px',
        width:'100%',
        backgroundColor:'#fff',
        boxShadow:'-2px -5px 5px -5px rgba(0,0,0,0.75)',
        paddingLeft:'20px',
        paddingRight:'20px',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
       marginTop:'auto'
        
    },
    label:{
      fontWeight:700,
      fontSize:'15px',
      width:'250px',
    }
}))