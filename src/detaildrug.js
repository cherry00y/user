import  React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Textarea from '@mui/joy/Textarea';

export default function Delailsdrug() {
    const { id } = useParams();
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "DI_ID":id
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://blue-bright-nightingale.cyclic.app/getdetaildrug/", requestOptions)
        .then(response => response.json())
        .then(result => {
             if(result.status === "ok"){

                setProperties(result.data[0].DI_Properties)
                setType(result.data[0].DI_Type)
                setPrice(result.data[0].DI_Price)
                 console.log("OK")
             }
  
        })
        .catch(error => console.log('error', error));
      }, [id])

      const [properties, setProperties] = useState('');
      const [type, setType] = useState('');
      const [price, setPrice] = useState('');
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p:10}}>
        <Card sx={{ maxWidth: 500}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image ="https://img.freepik.com/premium-vector/set-diverse-medications-relieve-illness-symptoms-collection-pills-drugs-syrup_160308-4269.jpg?w=2000"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Properties
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {properties}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <br/>
        <Grid container spacing={0}>
        <Grid item xs={6}>
            <Card sx={{ maxWidth: 220}}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Type
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {type}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
         </Grid>
        <Grid item xs={6}> 
            <Card sx={{ maxWidth: 220}}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Price
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {price}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
        <br/>
            <IconButton aria-label="delete" size="small" component={Link} to="/home">
                <ArrowBackIcon fontSize="inherit" />
             </IconButton>
        </Grid>
      </Container>
    </React.Fragment>

  );
}