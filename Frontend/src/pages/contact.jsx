import { Box, Button, Stack, TextField, Typography } from "@mui/material";



export default function Contact(){
    return(
  <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}>
    <Stack sx={{background:"#ffffff",gap:"24px",width:{sm:"450px",xs:"280px"},padding:{sm:"32px",xs:"16px"},borderRadius:{sm:"16px",xs:"8px"}}}>
    <Typography variant="h4" color="initial">Feedback</Typography>
    <TextField  label="Name" placeholder="ex: John"/>
    <TextField  label="Email" placeholder="abcd@gmail.com"/>
    <TextField  label="Issue Faced" placeholder="ex: Start here" multiline rows={4}/>
    <Button style={{backgroundColor:"black",color:"white"}}>
        Submit
    </Button>
    </Stack>
  </Box>
    )
}