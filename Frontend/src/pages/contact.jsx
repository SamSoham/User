import { Box, Button, Stack, TextField, Typography,Snackbar,Alert } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { messageRoute } from "../utils/APIroutes";
import { useNavigate } from "react-router-dom";
export default function Contact(){
  
const [username,setUsername] = useState("")
const [email,setEmail] = useState("")
const [feedback,setFeedback] = useState("")
const [open,setOpen] = useState(false)
const [opens,setOpens] = useState(false)
const [msg,setMsg] = useState("")
const navigate = useNavigate()

function validation(){
  if(email==="" || feedback===""){
    setMsg("Every Field should be filled");
    setOpen(true);
    return false;
  }
  return true;
}
function handleSubmit(){
  if(validation()){
    axios.post(messageRoute,{
      username,email,feedback
    }).then((res)=>{
      if(res.data.status===false){
        setMsg(res.data.msg);
        setOpen(true);
    }
    if(res.data.status===true){
      setMsg(res.data.msg);
      setOpens(true);
      setFeedback("")
      setEmail("")
    }
    })
  }
}
function handleClose3(event, reason){
  setOpen(false);
  setOpens(false);
}

useEffect(()=>{
  const user = JSON.parse(localStorage.getItem("user"))
  setUsername(user.username)
},[])

useEffect(()=>{
  if(!localStorage.getItem("user")){
   navigate('/')
  }
})

    return(
  <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}>
    <Stack sx={{background:"#ffffff",gap:"24px",width:{sm:"450px",xs:"280px"},padding:{sm:"32px",xs:"16px"},borderRadius:{sm:"16px",xs:"8px"}}}>
    <Typography variant="h4" color="initial">Feedback</Typography>
    <TextField  label="Username" placeholder="ex: John" value={username} disabled/>
    <TextField  label="Email" placeholder="abcd@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <TextField  label="Issue Faced" placeholder="ex: Start here" multiline rows={4} value={feedback} 
    onChange={(e)=>setFeedback(e.target.value)}/>
    <Button style={{backgroundColor:"black",color:"white"}} onClick={handleSubmit}>
        Submit
    </Button>
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
  </Box>
    )
}