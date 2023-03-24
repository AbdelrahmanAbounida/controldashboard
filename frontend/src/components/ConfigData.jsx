import { Button, Container, Typography,Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const ConfigData = () => {

 const [pinPositions,setPinPositions] = useState([])

 const handleGetRequest = ()=>{
  axios.get('/api/pins')
        .then(function (response) {
             setPinPositions(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
        .then(function (response) {
            console.log("done fetching")
        });

 }

  return (
    <Container>
      <Button onClick={()=>handleGetRequest()} variant="contained" sx={{color:"#fff"}}>Fetch API</Button>
      <Typography variant="h4" sx={{mt:7}}>Container Positions</Typography>
      <Box sx={{mt:2}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:"bold",fontSize:20}}>ID </TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:20}} align="right">X</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:20}} align="right">Y</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:20}} align="right">Z</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pinPositions.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.x}</TableCell>
              <TableCell align="right">{row.y}</TableCell>
              <TableCell align="right">{row.z}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
    </Container>
  )
}

export default ConfigData