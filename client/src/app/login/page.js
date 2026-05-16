// src/app/(auth)/login/page.js
"use client"; // This is a Client Component
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempt:', { email, password });
    // TODO: Implement login logic with Strapi API
  };

  return (
    <Box sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Access your account to find your perfect match.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
      <Link href="/forgot-password" passHref legacyBehavior>
        <Typography component="a" variant="body2" color="primary" sx={{ display: 'block', mb: 1 }}>
          Forgot Password?
        </Typography>
      </Link>
      <Link href="/register" passHref legacyBehavior>
        <Typography component="a" variant="body2" color="primary">
          Don't have an account? Register Now
        </Typography>
      </Link>
    </Box>
  );
}