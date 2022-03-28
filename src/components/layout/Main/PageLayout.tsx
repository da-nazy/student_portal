import React,{ReactNode} from 'react';
import {Grid,Container,Box} from '@material-ui/core';

type Props={
    children:ReactNode;
    className?:string;
    style?:any;
    sx?:any;
    spacing?:any;
}
export default function PageLayout({children,className,sx,style,spacing}:Props){
 return(
     <Container fixed>
        <Box component={"div"} className={className} style={style}>
        <Grid container spacing={spacing||3}>
       
        </Grid>
         </Box>
     </Container>
 )
}
