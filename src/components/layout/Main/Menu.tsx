import React,{ReactNode} from 'react'
import Footer from './Footer';
import Header from './Header';
import {Grid,useTheme,makeStyles,Box} from '@material-ui/core';

type Props={
    children:ReactNode;
}
export default function Menu({children}:Props) {
  const theme=useTheme();
  const classes=useStyle();
  return (
 <Box className={classes.container}>
<Header/>
 <Box className={classes.childCont}>{children}</Box>
  <Footer/>
 </Box>
  
 
  )
}

const useStyle=makeStyles((theme:any)=>({

container:{
  minHeight:'100%',
  maxHeight:'auto',
  display:'flex',
  flexDirection:'column',

  
},
childCont:{
  marginRight:'20px',
  marginLeft:'20px',
  marginTop:'40px',
  maxHeight:'550px',
  marginBottom:'10px',
  overflow:'hidden',
overflowX:'hidden',
overflowY:'auto',

scrollbarWidth: "none" /* Firefox */,
"&::-webkit-scrollbar": {
  display: "none"
} 
}
}))