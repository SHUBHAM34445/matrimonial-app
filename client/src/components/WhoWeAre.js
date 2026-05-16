// src/components/home/WhoWeAre.js
"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function WhoWeAre() {
  return (
    <>
      <Box>
        <img src={"http://localhost:1337/uploads/Untitled_design_2_4883a1bb1f.png"} alt="Who We Are" width={1920} height={1080} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
          Who We Are
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 500, mx: 'auto' }}>
              {/* Using next/image for optimized image loading */}
              <img
                src="https://img.freepik.com/premium-photo/business-concept_173387-5906.jpg?ga=GA1.1.1597830310.1734608040&semt=ais_hybrid&w=740" // Placeholder
                alt="Our Team"
                width={500}
                height={350}
                layout="responsive"
                style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Connecting Hearts, Building Futures
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
              At [Your Matrimony Site Name], we believe in the power of true connections. Our platform is meticulously designed to help individuals find their compatible life partners based on shared values, interests, and aspirations. We are committed to providing a safe, secure, and user-friendly environment for your matrimonial journey.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
              With advanced matchmaking algorithms and a vast database of verified profiles, we strive to make your search efficient and meaningful. Our dedicated team works tirelessly to ensure a seamless experience, guiding you every step of the way.
            </Typography>
            <Link href="/about" passHref legacyBehavior>
              <Button variant="contained" color="primary" size="large" sx={{ mt: 3, textTransform: 'none' }}>
                Learn More About Us
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}