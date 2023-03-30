import React from 'react';
import { useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';

import { Lock } from '@mui/icons-material';
import theme from '../../theme';
import { post } from '../../api';

function Copyright(props: any) {
  return (
    <Typography color="#ACACAC" align="center" fontSize={13} {...props}>
      COPYRIGHT © SPRINTPLANNER BY W-TEAM
    </Typography>
  );
}

export default function Login() {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email') as string;
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await post('/login', undefined, {
        email: data.get('email'),
        password: data.get('password'),
      });
      console.log(response);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#D8DAFF', width: 55, height: 55 }}>
            <Lock sx={{ fontSize: 40, color: '#000' }} />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight={'medium'}>
            Login Form
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  Need an account? Register
                </Link>
              </Grid>
            </Grid>
          </Box>
          {errorMessage && (
            <Typography color="error" sx={{ mt: 1 }}>
              {errorMessage}
            </Typography>
          )}
        </Box>
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
