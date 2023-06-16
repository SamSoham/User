import { Stack, Typography, Button,IconButton,SwipeableDrawer,List,ListItem,Divider,AppBar,Box } from "@mui/material";
import FormatAlignLeftIcon  from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
  const [open, setOpen] = useState(false);

    return( 
  <AppBar elevation={2}  sx={{
    position:"relative",
    top:"0",left:"0",
        padding:{sm:"10px 30px",xs:"0px 10px"},
        flexDirection:"row",justifyContent:"space-between",
        background:"transparent",
        backdropFilter:'blur(30px)',
        boxShadow:"2px 0px 10px #101e4a"
        
   }}>
    <Stack direction="row" alignItems="center" gap="10px">
    
    <Typography sx={{fontSize:{md:"24px",xs:"16px"},fontWeight:"500",color:"white"}} >LOGO</Typography>
    </Stack>
    <IconButton sx={{ color:"white" }}>
          <FormatAlignLeftIcon onClick={() => setOpen(true)}  />
    </IconButton>
    <SwipeableDrawer
     PaperProps={{
        sx: {
          background: "transparent",
          backdropFilter:"blur(10px)",
          width: "200px",
          display:open? "flex":"none",
        },
      }}
      open={open}
      anchor="right"
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}>
        <div>
            <IconButton>
              <ChevronRightIcon onClick={() => setOpen(false)} sx={{color:"white"}} />
            </IconButton>
          </div>
          <Divider sx={{backgroundColor:"white"}} />
          <List>
            <ListItem onClick={()=>setOpen(false)}>
            <Link to="/">
            <Typography sx={{color:"white",fontWeight:"500"}}>
        Change Password
       </Typography>
          </Link>
            </ListItem>
            <ListItem onClick={()=>setOpen(false)}>
            <Link to="/">
            <Typography sx={{color:"white",fontWeight:"500"}}>
        Contact / Help
       </Typography>
          </Link>
            </ListItem>
            <ListItem onClick={()=>setOpen(false)}>
            <Link to="/">
            <Typography sx={{color:"white",fontWeight:"500"}}>
        About Us
       </Typography>
          </Link>
            </ListItem>
            <ListItem onClick={()=>setOpen(false)}>
            <Link to="#">
            <Typography sx={{color:"white",fontWeight:"500"}}>
        User Profile
       </Typography>
          </Link>
            </ListItem>
          </List>
    </SwipeableDrawer>
   </AppBar>  
    )
}