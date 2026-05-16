// src/components/HeroVideoBanner.js
'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const HeroVideoBanner = () => {
  return (
    <Box sx={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        src="https://videos.pexels.com/video-files/8419637/8419637-sd_960_506_24fps.mp4"
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.5)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Find Your Right Match
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 600, mb: 3 }}>
          Trusted by thousands, start your journey with us today.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="/register" passHref>
            <Button variant="contained" color="primary" size="large">
              Join Free
            </Button>
          </Link>
          <Link href="/search" passHref>
            <Button variant="outlined" color="inherit" size="large">
              Browse Profiles
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroVideoBanner;
