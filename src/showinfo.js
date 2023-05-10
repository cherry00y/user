import React,{useState,useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { blueGrey, red, grey } from '@mui/material/colors';


export default function SimpleContainer() {
    const [items, setItems] = useState([]);
    const [itemss, setItemss] = useState([]);
    const color = blueGrey[50];
//fetch drug
    useEffect(() => {
        getdrug()
        getdisease()
    }, [])
    const getdrug = () => {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
        };
    fetch("https://rich-cyan-wasp.cyclic.app/tablegrug", requestOptions)
    .then(response => response.json())
    .then(result => {
        setItems(result.data)})
        //console.log(result)})
    .catch(error => console.log('error', error));
    }

    //fetch disease
    const getdisease = () => {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch("https://rich-cyan-wasp.cyclic.app/tabledisease", requestOptions)
        .then(response => response.json())
        .then(result => {
            setItemss(result.data)})
            //console.log(result)})
        .catch(error => console.log('error', error));
    }
    const detaildrug = id =>{
        window.location = '/detaildrug/'+id
      }
      const detaildisease = id =>{
        window.location = '/detaildisease/'+id
      }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p:5 }}>
        <Paper sx={{ p:2 }}>
            {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" component={Paper} style={{ background: '#a1887f' }} >
                            <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <h4>Drug</h4>
                            </Typography>
                            </Toolbar>
                            <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    {/* <TableCell align="left">Drug Name</TableCell> */}
                                    {/* <TableCell align="right">Action</TableCell> */}
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {items.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row" >
                                        {row.DI_ID}<br/>
                                        {row.DI_Name}
                                        <IconButton aria-label="delete" size="small" onClick={() => detaildrug(row.DI_ID)}>
                                            <FullscreenExitIcon fontSize="small"  variant="contained" style={{display: 'flex', justifyContent: 'right'}} sx={{ color: grey[400] }}/>
                                        </IconButton>
                                    </TableCell>
                                    {/* <TableCell align="right">
                                    <Button size="small">Small</Button>
                                    </TableCell> */}
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </AppBar>
                    </Box>
                    </Grid>
            
                    <Grid item xs={12} sm={6}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" component={Paper} style={{ background: '#a1887f' }}>
                            <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <h4>Disease</h4>
                            </Typography>
                            </Toolbar>
                            <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    {/* <TableCell align="left">Drug Name</TableCell> */}
                                    {/* <TableCell align="right">Action</TableCell> */}
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {itemss.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row" >
                                        {row.D_ID}<br/>
                                        {row.D_Name}
                                        <IconButton aria-label="delete" size="small" onClick={() => detaildisease(row.D_ID)}>
                                            <FullscreenExitIcon fontSize="small"  variant="contained" style={{display: 'flex', justifyContent: 'right'}} sx={{ color: grey[400] }}/>
                                        </IconButton>
                                    </TableCell>
                                    {/* <TableCell align="right">
                                    <Button size="small">Small</Button>
                                    </TableCell> */}
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </AppBar>
                    </Box>
                    </Grid>
                </Grid>
                   
        </Paper>

      </Container>
    </React.Fragment>
  );
}