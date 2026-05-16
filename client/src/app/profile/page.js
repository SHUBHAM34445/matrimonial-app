// src/app/(main)/profile/page.js
"use client"; // This is a Client Component
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function MyProfilePage() {
  // Mock user data - this would come from your Strapi API
  const userProfile = {
    id: 'user123',
    name: 'John Doe',
    age: 30,
    height: "5'9''",
    religion: 'Hindu',
    caste: 'Brahmin',
    profession: 'Software Engineer',
    location: 'Mumbai, India',
    photo: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=JD', // Placeholder
    about: 'Passionate about technology and traveling. Seeking a kind and understanding partner.',
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        My Profile
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar
          alt={userProfile.name}
          src={userProfile.photo}
          sx={{ width: 100, height: 100, mr: 3 }}
        />
        <Box>
          <Typography variant="h5" component="h2">{userProfile.name}</Typography>
          <Typography variant="body1" color="text.secondary">
            {userProfile.age} yrs, {userProfile.height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userProfile.profession} from {userProfile.location}
          </Typography>
        </Box>
        <Link href="/profile/edit" passHref legacyBehavior>
          <Button variant="outlined" sx={{ ml: 'auto' }}>
            Edit Profile
          </Button>
        </Link>
      </Box>

      <Typography variant="h6" component="h3" sx={{ mt: 4, mb: 2 }}>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        {userProfile.about}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
        Details
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText primary="Religion" secondary={userProfile.religion} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Caste" secondary={userProfile.caste} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Profession" secondary={userProfile.profession} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Location" secondary={userProfile.location} />
        </ListItem>
        {/* Add more profile details here */}
      </List>

      {/* TODO: Add sections for Photos, Partner Preferences, etc. */}
    </Box>
  );
}