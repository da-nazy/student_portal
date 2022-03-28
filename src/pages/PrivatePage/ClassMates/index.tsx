import React,{useState} from 'react'
import MainLayout from '../../../components/layout/Main/MainLayout'
import {Grid,useTheme,makeStyles,Box,Typography} from '@material-ui/core';
import BoxCont from '../../../components/BoxCont';
import StudentTable from '../../../components/TableComp/StudentTable';
export default function  ClassMates(){
    const theme=useTheme();
    const classes=useStyle();
    const [selectedRow, setSelectedRow] = useState(null);
    const style={
        header:{
            fontSize:'15px',fontWeight:'bold',color:'#000',borderBottom:'1px solid #000',
            borderTop:`1px solid #bbb`, borderRight:`1px solid #bbb`,
            borderLeft:`1px solid #bbb`
          
        },
    }

    const studentColumn=[ {title:'#',field:"index",headerStyle:style.header},
    { title: 'Name', field: 'name' ,headerStyle:style.header},
    { title: 'Reg_No', field: 'Reg_No',type:'numeric' ,headerStyle:style.header},
    { title: 'Sex', field: 'sex',headerStyle:style.header },
   ];
    const studentData=[ {index:'1', name: 'Mehmet', Reg_No:1234, sex:"Male"},
    {index:'2', name: 'Zerya Betül', Reg_No:1233, sex: "Female" },
 ]
    return(
        <MainLayout>
       <Grid container spacing={2}>
       <Grid item lg={12} md={12} sm={12} xs={12}>
       <BoxCont style={[classes.bxCont1]}>
                 <Box>
                    <StudentTable nonSelectedRowColor={"#fff"} selectedRowColor={"#EEE"} data={studentData} column={studentColumn} setSelectedRow={(e:any)=>setSelectedRow(e)} selectedRow={selectedRow}/>
                 </Box>
       </BoxCont>
       </Grid>
       </Grid>
        </MainLayout>
    )
}

const useStyle=makeStyles((theme:any)=>({
    typeHead2:{
        height:'50px',
        paddingLeft:'20px',
        display:'flex',
       alignItems:'center',
        flexDirection:'row',
        fontWeight:700,
        color: 'rgba(0, 0, 0, 0.5)',
        
    },
    bxCont1:{
        width:'100%',
        minHeight:'200px',
        padding:'20px'
       },
}))