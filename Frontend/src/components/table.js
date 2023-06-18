import { Table,TableHead,TableRow,TableBody,TableCell,TableContainer,Paper } from "@mui/material";


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
                    <TableRow>
                        <TableCell>
                            {n.username}
                        </TableCell>
                    </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
    )
}