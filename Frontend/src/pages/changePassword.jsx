import { Box, Stack, TextField, Typography,Button,Snackbar,Alert } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { changePwdRoute } from "../utils/APIroutes";
import { useNavigate } from "react-router-dom";


export default function ChangePWd(){

    const [username,setUsername] = useState("")
    const [password,setPassword] =  useState("")
    const [open,setOpen] = useState(false)
    const [opens,setOpens] = useState(false)
    const [msg,setMsg] = useState("")
    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(()=>{
        if(!localStorage.getItem("user")){
         navigate('/')
        }
     },[user])
    
   
    const navigate = useNavigate()
    function handleClose3(event, reason){
        setOpen(false);
        setOpens(false);
      }
    function handleValidation(){
      
        if(password==="" || username===""){
            setMsg("Fill all the input fields")
            setOpen(true)
            return false
        }
        if(password.length<8){
            setMsg("Password length should be 8")
            setOpen(true)
            return false
        }
        if(username!==user.username){
            setMsg("Username not Matching")
            setOpen(true)
            return false
        }
       return true
    }

   function handleSubmit(){
    if(handleValidation()){
        const id = user._id
        axios.post(changePwdRoute,{id,password}).then((res)=>{
            console.log(res.data)
            if(res.data.status===false){
                setMsg(res.data.msg);
                setOpen(true);
            }
            if(res.data.status===true){
                setMsg(res.data.msg);
                setOpens(true)
                localStorage.setItem("user",JSON.stringify(res.data.user))
                setPassword("")
                setUsername("")
            }
        })
    }
    
   }
 
    return(
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Stack sx={{width:"300px",gap:"16px",background:"#ffffff",padding:"24px",marginTop:"24px",borderRadius:"12px"}}>
            <Typography variant="h5" color="initial">Change Password</Typography>
            <TextField
             label="username"
             value={username}
             onChange={(e)=>setUsername(e.target.value)}
            />
            <TextField
             label="New Password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
            <Button style={{background:"#000000",color:"white"}} onClick={handleSubmit} >Submit</Button>
        </Stack>
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose3}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert onClose={handleClose3} severity="error" sx={{ width: "100%" }}>
              {msg}
            </Alert>
          </Snackbar>
          <Snackbar
            open={opens}
            autoHideDuration={4000}
            onClose={handleClose3}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert onClose={handleClose3} severity="success" sx={{ width: "100%" }}>
              {msg}
            </Alert>
          </Snackbar>
        </Box >
    )
}