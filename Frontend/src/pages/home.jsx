import {
  Box,
  Stack,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import Image from "mui-image";
import GIF from "../utils/robot.gif";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [role, setRole] = useState("");
  const data = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();
  useEffect(() => {
    if (role === "Therapist") {
      navigate("/login");
    } else if (role === "User") {
      navigate("/userRegister");
    }
  }, [role]);

  useEffect(()=>{
    if(data && data.role=== "Therapist"){
      navigate('/therapist')
    }
    else if(data && data.role=== "User"){
      navigate('/user')
    }
  },[])

  return (
    <Box sx={{ display:"flex",justifyContent:"center",alignItems:"center" }}>
      <Stack sx={{gap:"8px",alignItems:"center",maxWidth:{xs:"300px",sm:"450px"}}}>
        <Image src={GIF} width={300} />
        <Typography variant="h4" color="black">
          Hello!
        </Typography>
        <Typography variant="h6" color="black">
          Please Select a Role to move forward
        </Typography>
        <FormControl sx={{ color: "black" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Therapist"
              control={
                <Radio
                  sx={{ color: "black" }}
                  onClick={(e) => setRole(e.target.value)}
                />
              }
              label="Therapist"
            />
            <FormControlLabel
              value="User"
              control={
                <Radio
                  sx={{ color: "black" }}
                  onClick={(e) => setRole(e.target.value)}
                />
              }
              label="User"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
}
