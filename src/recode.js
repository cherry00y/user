import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './App.css'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

async function postJSON(jsdata) {
    try {
      const response = await fetch("https://rich-cyan-wasp.cyclic.app/record", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsdata),
      });
  
      const result = await response.json();
      alert("Success:", result);
      window.location = '/home'
    } catch (error) {
      console.error("Error:", error);
    }
  }

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsdata = {
        Nickname: data.get('nickname'),
        Birth: data.get('birth'),
        County: data.get('county'),
        Canton: data.get('canton'),
        District: data.get('district'),
        Congenitaldisease: data.get('congenitaldisease')
    };
    postJSON(jsdata)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
      {/* style={{backgroundColor: 'indigo'}} */}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <br/>
          <Paper sx={{p:2}} >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }} >
            <Avatar alt="Remy Sharp" src="https://img.freepik.com/premium-vector/tiny-doctors-cure-cat-giving-medications_160308-6616.jpg?w=2000" />
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <br/>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-nickname"
                  name="nickname"
                  required
                  fullWidth
                  id="nickName"
                  label="Nick Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="birth"
                  //label="Birth"
                  name="birth"
                  type='Date'
                  autoComplete="birth"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="county"
                  label="County"
                  name="county"
                  autoComplete="county"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="canton"
                  label="Canton"
                  //type=""
                  id="canton"
                  autoComplete="canton"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="district"
                  label="District"
                  //type=""
                  id="district"
                  autoComplete="district"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="congenitaldisease"
                  label="Congenitaldisease"
                  //type=""
                  id="congenitaldisease"
                  autoComplete="congenitaldisease"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  // label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Link href="home">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: '#4e342e' }}
            >
              Sign Up
            </Button>
            </Link>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link href="/#" variant="body2" color="inherit">
                  Already have an account? Sign in
                </Link> */}
              </Grid>
            </Grid>
          </Box>
          </Paper>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
