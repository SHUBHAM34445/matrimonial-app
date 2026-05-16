// src/components/home/ContactSupport.js
"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function ContactSupport() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#ffffff', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
        Need Help? We're Here For You.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: { xs: 4, md: 6 }, maxWidth: 700, mx: 'auto' }}>
        Our dedicated support team is available to assist you with any queries or concerns. Reach out to us anytime!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2, md: 4 }, flexDirection: { xs: 'column', sm: 'row' } }}>
        <Link href="/contact" passHref legacyBehavior>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<EmailIcon />}
            sx={{ py: 1.5, px: 4, textTransform: 'none' }}
          >
            Contact Form
          </Button>
        </Link>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<PhoneInTalkIcon />}
          sx={{ py: 1.5, px: 4, textTransform: 'none' }}
          onClick={() => alert('Call us at +91-123-456-7890')}
        >
          Call Us
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<SupportAgentIcon />}
          sx={{ py: 1.5, px: 4, textTransform: 'none' }}
          onClick={() => alert('Live Chat (feature not implemented)')}
        >
          Live Chat
        </Button>
      </Box>
    </Box>
  );
}