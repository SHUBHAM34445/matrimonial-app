// src/components/home/AppDownloadSection.js
"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
// import Image from 'next/image';

export default function AppDownloadSection() {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#e0f7fa', textAlign: 'center' }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                        Download Our App!
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                        Experience seamless matchmaking on the go. Download the [Your Matrimony Site Name] app from your favorite app store.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<AppleIcon />}
                            sx={{ py: 1.5, px: 3, textTransform: 'none' }}
                            onClick={() => alert('Redirect to Apple App Store (link not implemented)')}
                        >
                            Download on the App Store
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<AndroidIcon />}
                            sx={{ py: 1.5, px: 3, textTransform: 'none' }}
                            onClick={() => alert('Redirect to Google Play Store (link not implemented)')}
                        >
                            Get it on Google Play
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ maxWidth: 400, mx: 'auto', mt: { xs: 4, md: 0 } }}>
                        <img
                            src="https://img.freepik.com/free-vector/dating-app-concept-with-boy-girl-receiving-heart_23-2148291743.jpg?ga=GA1.1.1597830310.1734608040&semt=ais_hybrid&w=740"
                            alt="Dating App Concept"
                            width={500} 
                            height={500}
                        style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} // You can keep inline styles
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}