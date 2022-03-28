import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ClassNames } from '@emotion/react';
type Props={
  value?:any,
    data?:any,
    handleChange?:any,
    style?:any,
}
export default function SelectComp({value,data,handleChange,style}:Props) {
  return (
    <FormControl fullWidth>
  <Select
    id="demo-simple-select"
    value={value}
    onChange={(e)=>handleChange(e)}
    className={style}
  > 
  {data.map((e:any,i:number)=>{
    
   return <MenuItem key={i} value={e.value}>{e.name}</MenuItem>
  })}
   
  </Select>
</FormControl>
  )
}
