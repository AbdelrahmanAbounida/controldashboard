import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { showLogo } from '../features/LogoAppear/LogoAppearSlice'
import { useDispatch,useSelector } from 'react-redux';
import {Paper} from '@mui/material'
import { NavLink} from 'react-router-dom'

function Copyright(props) {

  const logo = useSelector((state) => state.LogoAppear.value)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(showLogo())
  }, []);

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.fraunhofer.de/" target="blank">
        CMLTeam
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    
      <Paper component="main"  sx={{width:{xs:"90%",sm:"70%",lg:"38%",xl:"28%"},mt:7,border:1,p:3,position:"absolute",ml:"auto",mr:"auto",left:0,right:0,borderColor:"gray",borderRadius:5}}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
            textAlign:"center",
          }}
        >
          <Avatar  sx={{width:"auto",height:"auto",p:1, m: 1, bgcolor: 'lightseagreen' }}>
            <LockOutlinedIcon sx={{width:45,height:45}}/>
          </Avatar>
          <Typography component="h1" variant="h4" sx={{fontWeight:"bold",letterSpacing:1}}>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2, width:"75%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2,color:"#fff",fontSize:21,width:"80%" }}
            >
              Login
            </Button>
            <Grid 
              container
              spacing={3}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{mr:0.1}}>
              <Grid item >
                <NavLink to={'/forget_password'} variant="body2" style={{ color: 'lightseagreen' }}>
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/register" variant="body2"  style={{ color: 'lightseagreen' }}>
                  {"Don't have an account? Sign Up"}
                </NavLink >
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Paper>

  );
}