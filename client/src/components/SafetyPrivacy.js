// src/components/home/SafetyPrivacy.js
"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import Link from 'next/link';
import Button from '@mui/material/Button';

export default function SafetyPrivacy() {
  const securityFeatures = [
    {
      icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Profile Verification',
      description: 'We encourage and facilitate profile verification to build a community of genuine users.',
    },
    {
      icon: <LockOutlinedIcon sx={{ fontSize: 60, color: 'secondary.main' }} />,
      title: 'Data Encryption',
      description: 'Your personal data is encrypted and protected with industry-standard security measures.',
    },
    {
      icon: <PolicyOutlinedIcon sx={{ fontSize: 60, color: 'success.main' }} />,
      title: 'Strict Privacy Controls',
      description: 'You control your information. Adjust privacy settings to decide who sees your photos and contact details.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#e3f2fd', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
        Your Safety & Privacy Is Our Priority
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {securityFeatures.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ p: 4, height: '100%', boxShadow: 3, borderRadius: 2 }}>
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: { xs: 4, md: 6 }, display: 'flex', justifyContent: 'center', gap: 3 }}>
        <Link href="/privacy" passHref legacyBehavior>
          <Button variant="outlined" color="primary" size="large" sx={{ textTransform: 'none' }}>
            Read Our Privacy Policy
          </Button>
        </Link>
        <Link href="/terms" passHref legacyBehavior>
          <Button variant="outlined" color="primary" size="large" sx={{ textTransform: 'none' }}>
            View Terms & Conditions
          </Button>
        </Link>
      </Box>
    </Box>
  );
}