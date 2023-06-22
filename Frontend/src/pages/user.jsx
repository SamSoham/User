import { Box, Typography } from '@mui/material';
import { Chart } from '../components/chart';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function User(){
 const navigate = useNavigate()
 
    useEffect(()=>{
        if(!localStorage.getItem("user")){
         navigate('/')
        }
     },[])

    return(
<Box sx={{display:"flex",justifyContent:"center",alignItems:"center",maxWidth:"100vw",flexDirection:"column"}}>
<Chart/>
<Link to="/session">
<Box sx={{background:"#ffffff",padding:"24px",marginTop:"16px",borderRadius:"8px" ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",cursor:"pointer"}}>
    <Typography variant="h6" color="initial">Session Details</Typography>
</Box>
</Link>
</Box>
    )
}