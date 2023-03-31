import React, { useState, FormEvent } from 'react';
import {
  ThemeProvider,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  CssBaseline,
  Link,
  Grid,
  Avatar,
} from '@mui/material';

import { Lock } from '@mui/icons-material';
import { post } from '../../api';
import theme from '../../theme';
import Copyright from '../Copyright/Copyright';

interface FormData {
  email: string;
  password: string;
}

export default function Register() {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email') as string;
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const password = data.get('password') as string;
    const confirmPassword = data.get('confirmPassword') as string;
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    } else if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }

    try {
      const response = await post<FormData>('/register', undefined, {
        email,
        password,
      });
      console.log(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Link href="/">
        <Typography margin={2}>Return to main page</Typography>
      </Link>
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
            Register
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
              error={errorMessage.includes('email')}
              helperText={
                errorMessage.includes('email')
                  ? 'Please enter a valid email address.'
                  : null
              }
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
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log in
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
        <Box sx={{ mt: 3, mb: 3 }}>
          <Typography variant="body2" color="textSecondary" align="center">
            By registering, you agree to our{' '}
            <Link href="#">Terms of Service</Link> and{' '}
            <Link href="#">Privacy Policy</Link>.
          </Typography>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
