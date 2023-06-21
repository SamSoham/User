import { Box } from '@mui/material';
import { Chart } from '../components/chart';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function User(){
 const navigate = useNavigate()
 
    useEffect(()=>{
        if(!localStorage.getItem("user")){
         navigate('/')
        }
     },[])

    return(
<Box sx={{display:"flex",justifyContent:"center",alignItems:"center",maxWidth:"100vw"}}>
<Chart/>
</Box>
    )
}