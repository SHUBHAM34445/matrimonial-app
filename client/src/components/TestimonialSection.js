// src/components/TestimonialSection.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const testimonials = [
  { name: 'Amit & Priya', message: 'We met on this platform and are now happily married!' },
  { name: 'Rahul & Neha', message: 'Best decision ever. Thanks to this amazing service.' },
];

const TestimonialSection = () => (
  <Box sx={{ py: 6, backgroundColor: '#f7f7f7' }}>
    <Typography variant="h4" align="center" sx={{ mb: 4 }}>
      Success Stories
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {testimonials.map((t, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>{t.name}</Typography>
              <Typography>{t.message}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default TestimonialSection;
