// 'use client';
// import React, { useState } from 'react';
// import {
//   Box, TextField, Button, Typography, Grid, Paper,
// } from '@mui/material';

// export default function RegisterPage() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     age: '',
//     religion: '',
//     location: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', form);
//   };

//   return (
//     <Box component={Paper} elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
//       <Typography variant="h5" gutterBottom>Register</Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}><TextField label="Full Name" fullWidth name="name" onChange={handleChange} /></Grid>
//           <Grid item xs={12}><TextField label="Email" fullWidth name="email" onChange={handleChange} /></Grid>
//           <Grid item xs={12}><TextField label="Password" type="password" fullWidth name="password" onChange={handleChange} /></Grid>
//           <Grid item xs={6}><TextField label="Age" fullWidth name="age" onChange={handleChange} /></Grid>
//           <Grid item xs={6}><TextField label="Religion" fullWidth name="religion" onChange={handleChange} /></Grid>
//           <Grid item xs={12}><TextField label="Location" fullWidth name="location" onChange={handleChange} /></Grid>
//           <Grid item xs={12}>
//             <Button variant="contained" color="primary" fullWidth type="submit">
//               Create Account
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// }



// src/app/(auth)/register/page.js
"use client"; // This is a Client Component
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Register attempt:', { name, email, password });
    // TODO: Implement registration logic with Strapi API
  };

  return (
    <Box sx={{ p: 4, maxWidth: 500, mx: 'auto', mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Create your free profile and start your search.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          Register
        </Button>
      </Box>
      <Link href="/login" passHref legacyBehavior>
        <Typography component="a" variant="body2" color="primary">
          Already have an account? Login
        </Typography>
      </Link>
    </Box>
  );
}