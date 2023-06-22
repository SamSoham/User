import Image from "mui-image"
import Avatar from '../utils/avatar.jpg'
import { Stack, Typography } from "@mui/material"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ImageUpload from "../components/uploadaImage"
export default function Profile(){
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem("user"))

useEffect(()=>{
 if(!data){
    navigate('/')
 }
},[])

    return(
        <>
        <Stack sx={{alignItems:"center",justifyContent:"center",marginTop:"16px"}}>
            <Stack gap="8px" alignItems="center">
            <ImageUpload/>
                <Typography variant="h6" color="initial">Name: {data.username}</Typography>
                <Typography variant="h6" color="initial">Email: {data.email}</Typography>
                <Typography variant="h6" color="initial">Phone Number: {data.phonenumber}</Typography>
            </Stack>
            
        </Stack>
        </>
    )
}