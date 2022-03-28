import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { mainPages,authPages } from '../utilities/helpers/pages';

export const authRoute:any=()=>{
  // login,
  // forgot password

 return(
    <Routes>
    {authPages.map((e:any,i:any)=>{
             console.log("auth route");
                 return(
                     <Route
                     path={e.path}
                     element={<e.Element/>}
                     key={i}
                   />
                 )
             })
    }
  </Routes>
 )
   

}

export const privateRoute:any=()=>{
 return (
    <Routes>
    {
         mainPages.map((e:any,i:any)=>{
             console.log("private route",e)
             return(
                 <Route
                 path={e.path}
                 element={<e.Element/>}
                 key={i}
               />
             )
         })
    }
</Routes>
 )
}