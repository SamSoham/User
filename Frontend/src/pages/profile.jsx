import Image from "mui-image"
import Avatar from '../utils/avatar.jpg'
import { Stack, Typography } from "@mui/material"
export default function Profile(){
  
    const data = JSON.parse(localStorage.getItem("user"))

    return(
        <>
        <Stack sx={{alignItems:"center",justifyContent:"center",marginTop:"16px"}}>
            <Stack gap="8px" alignItems="center">
                <Image src={Avatar} width={200} height={200} style={{borderRadius:"50%"}}/>
                <Typography variant="h6" color="initial">Name: {data.username}</Typography>
                <Typography variant="h6" color="initial">Email: {data.email}</Typography>
                <Typography variant="h6" color="initial">Phone Number: {data.phonenumber}</Typography>
            </Stack>
        </Stack>
        </>
    )
}