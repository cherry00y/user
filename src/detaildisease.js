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
// import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Textarea from '@mui/joy/Textarea';

export default function Delailsdrug() {
    const { id } = useParams();
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "D_ID":id
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://blue-bright-nightingale.cyclic.app/getdetaildisease/", requestOptions)
        .then(response => response.json())
        .then(result => {
             if(result.status === "ok"){
        
                setSymptom(result.data[0].D_Symptom)
                setCause(result.data[0].D_Cause)
                setTreatment(result.data[0].D_Treatment)
                setTreatmentys(result.data[0].D_Treatmentys)
                console.log("OK")
             }
  
        })
        .catch(error => console.log('error', error));
      }, [id])

      const [symptom, setSymptom] = useState('');
      const [cause, setCause] = useState('');
      const [treatment, setTreatment] = useState('');
      const [treatmentys, setTreatmentys] = useState('');
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="lg" sx={{p:10}}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
            <Card sx={{ maxWidth: 500}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image ="https://images.ctfassets.net/f60q1anpxzid/asset-df16a1c9c581fc64ddb3927c78ca63a2/a2262d40cc9130b06d006dccbca3a3ee/embeddedIMG_-Asthma-Symptoms_850px_1.jpg?fm=jpg&fl=progressive&q=50&w=1200"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Symptom
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {symptom}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

        <Grid item xs={6}>
            <Card sx={{ maxWidth: 500}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image ="https://images.ctfassets.net/f60q1anpxzid/asset-8d8ced56a109e2b35b3b7ce488e8d6c2/1c78d473e5ba5f2f785266bc9c5b88a3/embeddedIMG_-Asthma-Symptoms_850px_6.jpg?fm=jpg&fl=progressive&q=50&w=1200"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Cause
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cause}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>    
        </Grid>
        </Grid>
        <br/>
        <Grid container spacing={0}>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 500}}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Treatment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {treatment}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
         </Grid>
        <Grid item xs={6}> 
            <Card sx={{ maxWidth: 500}}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Treatment yourself
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {treatmentys}
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