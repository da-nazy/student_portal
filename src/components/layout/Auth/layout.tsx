import React,{ReactNode} from 'react'
import {Box,Paper,useTheme,makeStyles} from '@material-ui/core';
type Props={
    children:ReactNode,
}
export default function Layout({children}:Props) {
    const theme=useTheme();
    const classes=useStyles();
  return (
   
      <Box className={classes.container}>
            <Paper elevation={1} className={classes.cont}>
        {children}
    </Paper>
      </Box>

  )
}

const useStyles=makeStyles((theme:any)=>({
    cont:{
        width:'70%',
        height:'80%',
        margin:'0 auto',
        
    },
    container:{
        display:'grid',
        flexDirection:'column',
        alignItems:'center',
        height:'100%',
        width:'100%',
    }
  
}))