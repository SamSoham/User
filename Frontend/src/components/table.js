import { Table,TableHead,TableRow,TableBody,TableCell,TableContainer,Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function DataTable({data}){


 let Data = data

    return(
        <TableContainer component={Paper} sx={{maxWidth:"450px"}}>
          <Table>
            <TableHead sx={{backgroundColor:"#343434"}}>
                <TableRow >
                <TableCell style={{color:"white"}}>User Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {Data?.map((n)=>{
                return(
                  //Link will be changed to /user/:id to fetch data  of particular user
                    <TableRow >
                    
                        <TableCell>
                        <Link to='/user'>
                            {n.username}
                            </Link>
                        </TableCell>
                      
                    </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
    )
}