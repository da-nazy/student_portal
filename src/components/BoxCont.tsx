import React,{ReactNode} from 'react'
import { Box,useTheme,makeStyles } from '@material-ui/core';
import {AppColor} from '../utilities/theme/AppColor';
type Props={
    children:ReactNode,
    style?:any
}

export default function BoxCont({children,style}:Props) {
    const defaultStyle={
        border:`1px solid ${AppColor.primary}`,
        borderRadius:'5px',
        borderBottomWidth:'4px',
        backgroundColor:'#fff'
    }
    const theme=useTheme();
    const classes=useStyle();
  return (
    <Box className={style} style={defaultStyle}>
     {children}
    </Box>
  )
}

const useStyle=makeStyles((theme:any)=>({
  
}))