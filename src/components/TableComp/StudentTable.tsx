import React,{forwardRef,useState} from 'react';
import MaterialTable from 'material-table';
import { AppColor } from '../../utilities/theme/AppColor';
import {AddBox, ArrowUpward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, Edit, FilterList, FirstPage, LastPage, Remove, Save, SaveAlt, Search, ViewColumn} from '@material-ui/icons';

type Props={
  column:any,
  data:any,
  selectedRow:any,
  setSelectedRow:any,
  nonSelectedRowColor:any,
  selectedRowColor:any
}
export default function StudentTable({column,data,selectedRow,setSelectedRow,nonSelectedRowColor,selectedRowColor}:Props) {
    const tableIcons = {
        Add: forwardRef<SVGSVGElement>((props:any, ref:any) => <AddBox {...props} ref={ref}/>),
        Save: forwardRef<SVGSVGElement>((props:any, ref:any) => <Save {...props} ref={ref}/>),
        Check: forwardRef<SVGSVGElement>((props:any, ref:any) => <Check {...props} ref={ref}/>),
        Clear: forwardRef<SVGSVGElement>((props:any, ref:any) => <Clear {...props} ref={ref}/>),
        Delete: forwardRef<SVGSVGElement>((props:any, ref:any) => <DeleteOutline {...props} ref={ref}/>),
        DetailPanel: forwardRef<SVGSVGElement>((props:any, ref:any) => <ChevronRight {...props} ref={ref}/>),
        Edit: forwardRef<SVGSVGElement>((props:any, ref:any) => <Edit {...props} ref={ref}/>),
        Export: forwardRef<SVGSVGElement>((props:any, ref:any) => <SaveAlt {...props} ref={ref}/>),
        Filter: forwardRef<SVGSVGElement>((props:any, ref:any) => <FilterList {...props} ref={ref}/>),
        FirstPage:forwardRef<SVGSVGElement>((props:any, ref:any) => <FirstPage {...props} ref={ref}/>),
        LastPage:forwardRef<SVGSVGElement>((props:any, ref:any) => <LastPage {...props} ref={ref}/>),
        NextPage: forwardRef<SVGSVGElement>((props:any, ref:any) => <ChevronRight {...props} ref={ref}/>),
        PreviousPage:forwardRef<SVGSVGElement>((props:any, ref:any) => <ChevronLeft {...props} ref={ref}/>),
        ResetSearch:forwardRef<SVGSVGElement>((props:any, ref:any) => <Clear {...props} ref={ref}/>),
        Search:forwardRef<SVGSVGElement>((props:any, ref:any) => <Search {...props} ref={ref}/>),
        SortArrow:forwardRef<SVGSVGElement>((props:any, ref:any) => <ArrowUpward {...props} ref={ref}/>),
        ThirdStateCheck:forwardRef<SVGSVGElement>((props:any, ref:any) => <Remove {...props} ref={ref}/>),
        ViewColumn:forwardRef<SVGSVGElement>((props:any, ref:any) => <ViewColumn {...props} ref={ref}/>)
    };
    
    function PositioningActionsColumn() {
       
        return (
          <MaterialTable
          components={{
            Container: props => (
              <div style={{height: '100%'}}>
               {props.children} 
              </div>
            ),
          }}
            title="My Class Mates"
            
           icons={tableIcons}
           
          
           columns={column}
           data={data}
           onRowClick={((evt, selectedRow:any) => setSelectedRow(selectedRow.tableData.id))}
            options={{
               
              actionsColumnIndex: -1,
            
              search:false,
              rowStyle: rowData => ({
                backgroundColor: (selectedRow === rowData.tableData.id) ? selectedRowColor:nonSelectedRowColor,
               
              }),
              emptyRowsWhenPaging: false, 
            
            }}
          />
        )
      }
  return (
    PositioningActionsColumn()
  )
}


