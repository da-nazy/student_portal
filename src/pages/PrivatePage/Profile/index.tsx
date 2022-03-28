import React,{useState} from 'react'
import MainLayout from '../../../components/layout/Main/MainLayout';
import {Grid,Box,useTheme,makeStyles,Divider,Typography,Button,TextField} from "@material-ui/core"
import BoxCont from '../../../components/BoxCont';
import {AppColor} from '../../../utilities/theme/AppColor';
import Maduka_logo from '../../../assets/images/Maduka_logo.png';
import SelectComp from '../../../components/SelectComp';
export default function Profile(){
    const theme=useTheme();
    const classes=useStyle();
    const [userImage,setUserImage]=useState(Maduka_logo);
     const[gender,setGender]=useState({value:'Female',name:'Female'});
     const selectChange=(e:any)=>{
         console.log(e)
      setGender(e);
     }
    return(
       <MainLayout>
          <Grid container spacing={2}>
              <Grid item lg={8} md={10} sm={12} xs={12}>
              <BoxCont  style={[classes.bxCont1]}>
                  <Box className={classes.box1cont}>
                  <Typography className={classes.typeHead1}>
                     Update Profile Picture
                   </Typography>
                   <Divider className={classes.divider}/>
                   <Box className={classes.typeBody1}>
                    <Box className={classes.imageCont}>
                      <img src={userImage} className={classes.userImage}/>  
                    </Box>
                    <Box className={classes.imgUpload}>
                     <Box className={classes.imgSub}>
                     <Typography>
                        Upload Profile Photo
                    </Typography>
                      <input type={"file"} accept={"image/*"}   className={classes.imgInput}/>
                     </Box>
                    </Box>
                   </Box>
                   <Divider className={classes.divider}/>
                   <Box className={classes.typeFoot1}>
                       <Button className={classes.actBtn1}>
                      Update
                       </Button>
                    </Box>
                  </Box>
              </BoxCont>
              </Grid>
          </Grid>

          <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12} className={classes.profileCont}>
          <BoxCont style={[classes.bxCont2]}>
          <Typography className={classes.typeHead2}>
                     Profile
                   </Typography>
                   <Divider className={classes.divider}/>
                   <Grid container >
                     <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              First Name:
                             </Typography>
                             <TextField size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Last Name:
                             </Typography>
                             <TextField size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Other Name:
                             </Typography>
                             <TextField size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Reg Number:
                             </Typography>
                             <TextField disabled={true} size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont} style={{backgroundColor:'#bbb'}}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Date Of Birth:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Gender:
                             </Typography>
                            <SelectComp  style={classes.inputCont} data={[{value:'Male',name:'Male'},{value:'Female',name:'Female'}]} value={{value:'Female'}} handleChange={(e:any)=>selectChange(e)}/>
                               </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                               Country:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              State:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Local Government:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Town:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Address:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Email:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid lg={12} md={12} sm={12} xs={12} >
                    <Divider className={classes.pDivider}/>
                        <Typography className={classes.sad}>
                        Students Academic Details
                        </Typography>
                        <Grid container>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Class Level To Assign:
                             </Typography>
                             <TextField disabled={true} size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont} style={{backgroundColor:'#bbb'}}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                             Class Extension To Assign:
                             </Typography>
                             <TextField disabled={true} size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont} style={{backgroundColor:'#bbb'}}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Student Type:
                             </Typography>
                             <SelectComp  style={classes.inputCont} data={[{value:'Bording',name:'Bording'},{value:'Day',name:'day'}]} value={{value:'Boarding',name:'Boarding'}} handleChange={(e:any)=>selectChange(e)}/>
                        
                                   </Box>
                    </Grid> 
                        </Grid>
                    </Grid>
                    <Grid lg={12} md={12} sm={12} xs={12} >
                    <Divider className={classes.pDivider}/>
                        <Typography className={classes.sad}>
                        Students Parents Details
                        </Typography>
                        <Grid container>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Parents Name:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Parents Email:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Phone Number:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                  
                   <Grid lg={12} md={12} sm={12} xs={12} item >
                   <Divider className={classes.divider}/>
                      <Box className={classes.typeFoot1} style={{marginTop:'20px'}}>
                      <Button className={classes.actBtn1}>
                      Update
                       </Button>
                      </Box>
                    </Grid>
                        </Grid>
                    </Grid>
                  
                   </Grid>
          </BoxCont>
     
          </Grid>
         
          
          </Grid>
          <Grid container spacing={3} >
          <Grid item lg={12} md={12} sm={12} xs={12}>
              <BoxCont  style={[classes.bxCont3]}>
              <Typography className={classes.typeHead2}>
                     Profile
                   </Typography>
                   <Divider className={classes.divider}/>
               
                <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Password:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                         <Box className={classes.input}>
                             <Typography className={classes.label}>
                              Confirm Password:
                             </Typography>
                             <TextField   size={"small"} color={'primary'} variant={"outlined"} className={classes.inputCont}/>
                         </Box>
                    </Grid> 
                    <Grid lg={12} md={12} sm={12} xs={12} item >
                   <Divider className={classes.divider}/>
                      <Box className={classes.typeFoot1} style={{marginTop:'20px'}}>
                      <Button className={classes.actBtn1}>
                      Update
                       </Button>
                      </Box>
                    </Grid>
             
          </Grid>
                
              </BoxCont>
              </Grid>
          </Grid>
       </MainLayout>
    )
}

const useStyle=makeStyles((theme:any)=>({ 
    profileCont:{

    },
    sad:{
   fontSize:'18px',
   fontWeight:600,
   color: 'rgba(0, 0, 0, 0.5)',
   marginTop:'10px',
   paddingLeft:'20px',
   paddingRight:'20px'
    },
  
    pDivider:{
        marginLeft:'20px',
        marginRight:'20px',
        color:'#bbb'
    },
    input:{
    marginLeft:'20px',
    marginTop:'10px',
    marginBottom:'15px'
    },
    inputCont:{
    width:'95%',
    height:'40px'
    },
    label:{
     fontWeight:500,
     marginBottom:'5px',
    },
    bxCont2:{
     width:'100%',
     minHeight:'500px'
    },
    bxCont1:{
     width:'100%',
     minHeight:'300px',
     [theme.breakpoints.down('xs')]:{
        height:'320px !important'
       }
    },
    bxCont3:{
        width:'100%',
        minHeight:'200px',
       
    },
    imgInput:{
     height:'40%',
    marginTop:'5px'
    },
    imgSub:{
       width:'80%',
       height:'70%',
    },

    imgUpload:{
   height:'100%',
   width:'70%',
   display:'flex',
   flexDirection:'row',
   alignItems:'center'
    },
    imageCont:{
      width:'30%',
      height:'100%',
      display:'flex',
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center',
    
    
    },
     userImage:{
         width:'80%',
         height:'80%',
       
 },
     actBtn1:{
    fontWeight:700,
    color:'#fff',
    fontSize:'10px',
    backgroundColor:`${AppColor.lightPrimary}`,
   "&:hover":{
       backgroundColor:`${AppColor.primary}`,
       boxShadow: '1px 1px 11px 6px rgba(0,0,0,0)',
   }
 },
     typeFoot1:{
        height:'20%',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingRight:'10px',
     },

     typeBody1:{
        width:'100%',
        height:'60%',
        paddingLeft:'10px',
        display:'flex',
        alignItems:'center',
         flexDirection:'row',
        [theme.breakpoints.down('xs')]:{
          flexDirection:"column !important"
     }
     },
    divider:{
        color:'#bbb'
      },
     box1cont:{
         width:'100%',
         height:'300px',
         [theme.breakpoints.down('xs')]:{
            height:'330px !important',
           
           }
     },
     typeHead1:{
        height:'20%',
        paddingLeft:'20px',
        display:'flex',
       alignItems:'center',
        flexDirection:'row',
        fontWeight:700,
        color: 'rgba(0, 0, 0, 0.5)',
        
 },
 typeHead2:{
    height:'50px',
    paddingLeft:'20px',
    display:'flex',
   alignItems:'center',
    flexDirection:'row',
    fontWeight:700,
    color: 'rgba(0, 0, 0, 0.5)',
    
},
 }
))
