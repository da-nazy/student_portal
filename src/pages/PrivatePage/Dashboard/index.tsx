import React from 'react';
import MainLayout from '../../../components/layout/Main/MainLayout';
import {Grid,Box,useTheme,makeStyles,Divider, Typography,Button} from '@material-ui/core'
import { AppColor } from '../../../utilities/theme/AppColor';
import BoxCont from '../../../components/BoxCont';
export default function  Dashboard(){
    const theme=useTheme();
    const classes=useStyle();
    return(
    <MainLayout>
           <Grid container spacing={2}>
               <Grid item lg={4} md={4} sm={6} xs={12}>
                   <BoxCont  style={[classes.bxCont]}>
                   <Box className={classes.boxCont}>
                   <Typography className={classes.typeHead}>
                     CLASS
                   </Typography>
                   <Divider className={classes.divider}/>
                    <Typography className={classes.typeBody} component={"h3"}>
                     SS1 A
                    </Typography>
                   <Divider className={classes.divider}/>
                    <Box className={classes.typeFoot}>
                       <Button className={classes.actBtn}>
                       View Class Mates
                       </Button>
                    </Box>
                   </Box>   
                   </BoxCont>
               </Grid>

               <Grid item lg={4} md={4} sm={6} xs={12}>
                   <BoxCont  style={[classes.bxCont]}>
                   <Box className={classes.boxCont}>
                   <Typography className={classes.typeHead}>
                    HOSTEL
                   </Typography>
                   <Divider className={classes.divider}/>
                    <Typography className={classes.typeBody} component={"h3"}>
                     No Hostel Assinged Yet
                    </Typography>
                   <Divider className={classes.divider}/>
                    <Box className={classes.typeFoot}>
                      
                    </Box>
                   </Box>   
                   </BoxCont>
               </Grid>
              
           </Grid>
    </MainLayout>
    )
}

const useStyle=makeStyles((theme:any)=>({
    bxCont:{
    width:'100%',
    height:'200px'
    },
    actBtn:{
     fontWeight:700,
     color:'#fff',
     fontSize:'10px',
     backgroundColor:`${AppColor.lightPrimary}`,
    "&:hover":{
        backgroundColor:`${AppColor.primary}`,
        boxShadow: '1px 1px 11px 6px rgba(0,0,0,0)',
    }
    },
    typeFoot:{
    height:'30%',
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    paddingRight:'10px',
    },
    boxCont:{
    width:'100%',
    height:'200px',
    },
    typeHead:{
           height:'30%',
           paddingLeft:'10px',
           display:'flex',
          alignItems:'center',
           flexDirection:'row',
           fontWeight:700,
        color: 'rgba(0, 0, 0, 0.5)',
           
    },
   divider:{
     color:'#bbb'
   },
   typeBody:{
       width:'100%',
       height:'40%',
       paddingLeft:'10px',
       display:'flex',
       alignItems:'center',
        flexDirection:'row',
       fontSize:'28px'
   }
}))