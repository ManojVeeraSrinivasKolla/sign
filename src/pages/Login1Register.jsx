// src/components/SignInSide.js

import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function SignInSide() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    blood: '',
    mobileNumber: '',
    dateOfBirth: '',
    details: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Error registering user:', response.statusText);
      }
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url()',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              <div><img src="/group-134@2x"/> Life Line</div>
              
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter Email"
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
              <TextField
                id="outlined-number"
                label="Mobile Number"
                type="number"
               InputLabelProps={{
               shrink: true,
               }}
               
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="blood"
                label="Blood Group"
                name="blood"
                autoComplete="blood"
                autoFocus
              />
               <TextField
                id="outlined-number1"
                label="Date of Birth"
                type="number"
               InputLabelProps={{
               shrink: true,
               }}
               
              />
                <TextField
                margin="normal"
                required
                fullWidth
                id="details"
                label="Other Details"
                name="details"
                autoComplete="details"
                autoFocus
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Register
              </Button>

              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="body2" color="textSecondary">
                  continue with
                </Typography>
              </Box>

              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around' }}>
                <img src="/images/facebook@2x.png" alt="facebook" />
                <img src="/images/google@2x.png" alt="google" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
