import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import DataTable from '../components/table'
import axios from "axios";
import { useEffect, useState } from 'react';
import { getUserRoute } from "../utils/APIroutes";


export default function Therapist(){
   
 const [data,setData] =useState([])

    useEffect(()=>{
        axios.get(getUserRoute).then((res)=>{
            const user = res.data.user
            setData(user)
      })
     },[])

    return(
       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"16px"}}>
        <Typography sx={{fontSize:"24px"}}>
            USER DETAILS
        </Typography>
       <DataTable  data={data}/>
       </Box>
    )
}