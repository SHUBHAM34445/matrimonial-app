// // src/app/(main)/dashboard/page.js
// "use client"; // This is a Client Component
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
// import Link from 'next/link';

// export default function DashboardPage() {
//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Welcome to Your Dashboard!
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Quick access to your profile, matches, and messages.
//       </Typography>

//       <Grid container spacing={3} sx={{ mt: 3 }}>
//         <Grid item xs={12} sm={6} md={4}>
//           <Link href="/profile" passHref legacyBehavior>
//             <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { boxShadow: 6 } }}>
//               <CardContent>
//                 <Typography variant="h5" component="h2" gutterBottom>
//                   My Profile
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   View and update your personal information.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Link>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Link href="/search" passHref legacyBehavior>
//             <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { boxShadow: 6 } }}>
//               <CardContent>
//                 <Typography variant="h5" component="h2" gutterBottom>
//                   Search Matches
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Find profiles based on your preferences.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Link>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Link href="/interests" passHref legacyBehavior>
//             <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { boxShadow: 6 } }}>
//               <CardContent>
//                 <Typography variant="h5" component="h2" gutterBottom>
//                   Interests
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Manage interests sent and received.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Link>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Link href="/messages" passHref legacyBehavior>
//             <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { boxShadow: 6 } }}>
//               <CardContent>
//                 <Typography variant="h5" component="h2" gutterBottom>
//                   Messages
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Communicate with your matches.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Link>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Link href="/membership" passHref legacyBehavior>
//             <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { boxShadow: 6 } }}>
//               <CardContent>
//                 <Typography variant="h5" component="h2" gutterBottom>
//                   Membership
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Upgrade your plan for more features.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Link>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }






// src/app/(main)/dashboard/page.js
"use client"; // This is a Client Component

import { useState } from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, Divider, Paper } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Badge from '@mui/material/Badge';
// import Paper from '@mui/material/Paper';

// Icons for navigation and quick access cards
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FilterListIcon from '@mui/icons-material/FilterList';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; // For view all

// --- Mock Data (Replace with data fetched from Strapi later) ---
const mockUserProfile = {
  name: 'Michael Rodriguez',
  isPremium: true,
  profileCompletion: 75,
  avatar: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=MR', // Placeholder
};

const mockRecentMatches = [
  { id: 1, name: 'Sophia Johnson', age: 28, profession: 'Software Engineer', location: '5 miles away', interests: ['Travel', 'Hiking', 'Reading'], matchPercentage: 93, avatar: 'https://via.placeholder.com/50/FFD700/FFFFFF?text=SJ' },
  { id: 2, name: 'Emma Davis', age: 26, profession: 'Marketing Manager', location: '8 miles away', interests: ['Music', 'Cooking', 'Art'], matchPercentage: 87, avatar: 'https://via.placeholder.com/50/C0C0C0/FFFFFF?text=ED' },
  { id: 3, name: 'Olivia Wilson', age: 29, profession: 'Architect', location: '12 miles away', interests: ['Photography', 'Yoga', 'Traveling'], matchPercentage: 82, avatar: 'https://via.placeholder.com/50/FFA500/FFFFFF?text=OW' },
];

const mockRecentMessages = [
  { id: 1, name: 'Sophia Johnson', message: 'Hey! I saw that we both like hiking. Which is your favorite trail?', avatar: 'https://via.placeholder.com/50/FFD700/FFFFFF?text=SJ' },
  { id: 2, name: 'Emma Davis', message: 'Thanks for the recommendation! I\'ll check it out.', avatar: 'https://via.placeholder.com/50/C0C0C0/FFFFFF?text=ED' },
  { id: 3, name: 'Olivia Wilson', message: 'I\'d love to hear more about your recent trip to Bali!', avatar: 'https://via.placeholder.com/50/FFA500/FFFFFF?text=OW' },
];
// --- END Mock Data ---

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState('dashboard'); // State for active navigation item

  const navItems = [
    { name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { name: 'My Profile', icon: <PersonIcon />, path: '/profile' },
    { name: 'Search Matches', icon: <SearchIcon />, path: '/search' },
    { name: 'Interests', icon: <FavoriteBorderIcon />, path: '/interests', badge: 3 },
    { name: 'Messages', icon: <MessageIcon />, path: '/messages', badge: 5 },
    { name: 'Membership', icon: <StarBorderIcon />, path: '/membership' },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
      {/* Left Sidebar */}
      <Box
        sx={{
          width: 280,
          backgroundColor: '#ffffff',
          boxShadow: 2,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          flexShrink: 0,
        }}
      >
        {/* Logo/Site Name */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#D91656' }}>
            Real Love
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Find your perfect partner
          </Typography>
        </Box>

        {/* User Profile Card in Sidebar */}
        <Card sx={{ width: '100%', p: 2, textAlign: 'center', backgroundColor: '#f0f3f6' }}>
          <Avatar src={mockUserProfile.avatar} alt={mockUserProfile.name} sx={{ width: 70, height: 70, mx: 'auto', mb: 1 }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>{mockUserProfile.name}</Typography>
          {mockUserProfile.isPremium && (
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Premium Member
            </Typography>
          )}
        </Card>

        {/* Navigation */}
        <List sx={{ width: '100%' }}>
          {navItems.map((item) => (
            <Link href={item.path} key={item.name} passHref legacyBehavior>
              <ListItemButton
                selected={activeNav === item.name.toLowerCase().replace(/\s/g, '')}
                onClick={() => setActiveNav(item.name.toLowerCase().replace(/\s/g, ''))}
                sx={{
                  borderRadius: 1,
                  mb: 1,
                  '&.Mui-selected': {
                    backgroundColor: 'primary.light',
                    color: 'primary.main',
                    fontWeight: 'bold',
                    '& .MuiListItemIcon-root': { color: 'primary.main' },
                  },
                }}
              >
                <ListItemIcon sx={{ color: activeNav === item.name.toLowerCase().replace(/\s/g, '') ? 'primary.main' : 'text.secondary' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Badge badgeContent={item.badge} color="error" invisible={!item.badge}>
                      <Typography variant="body1" sx={{ fontWeight: activeNav === item.name.toLowerCase().replace(/\s/g, '') ? 'bold' : 'normal' }}>
                        {item.name}
                      </Typography>
                    </Badge>
                  }
                />
              </ListItemButton>
            </Link>
          ))}
        </List>

        <Box sx={{ flexGrow: 1 }} /> {/* Pushes content to bottom */}

        {/* Upgrade to Premium Card in Sidebar */}
        <Card sx={{ width: '100%', p: 2, textAlign: 'center', backgroundColor: '#e3f2fd', border: '1px solid #90caf9' }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Upgrade to Premium
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Get unlimited matches and advanced filters
            </Typography>
            <Button variant="contained" color="primary" fullWidth size="large" sx={{ textTransform: 'none' }}>
              Upgrade Now
            </Button>
          </CardContent>
        </Card>

        {/* Filter Icon at bottom */}
        <Box sx={{ mt: 2 }}>
          <FilterListIcon sx={{ color: 'text.secondary', fontSize: 28 }} />
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, p: 4, overflowY: 'auto' }}>
        {/* Main Content Header (Dashboard title, Search, Notifications, User Avatar) */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Dashboard
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              sx={{ width: 250, backgroundColor: '#ffffff' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <Badge badgeContent={2} color="error">
              <NotificationsNoneIcon sx={{ fontSize: 28, color: 'text.secondary' }} />
            </Badge>
            <Avatar src={mockUserProfile.avatar} alt={mockUserProfile.name} sx={{ width: 40, height: 40 }} />
          </Box>
        </Box>

        {/* Welcome Section */}
        <Paper sx={{ p: 4, mb: 4, backgroundColor: '#e0f2f1', borderRadius: 2, position: 'relative', overflow: 'hidden' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={9}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.dark' }}>
                Welcome to Your Dashboard, {mockUserProfile.name.split(' ')[0]}!
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                Quick access to your profile, matches, and messages.
                <br />
                Your profile is {mockUserProfile.profileCompletion}% complete.
              </Typography>
              <Link href="/profile/edit" passHref legacyBehavior>
                <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>
                  Complete Your Profile
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              {/* Profile Completion Circle */}
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  fontSize: '2rem',
                  color: 'primary.main',
                  border: `8px solid #c8e6c9`, // Light green background for circle
                  borderColor: (theme) => `8px solid ${theme.palette.success.light}`,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1,
                  '&::before': { // Simulates the progress fill
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    boxShadow: (theme) => `inset 0 0 0 8px ${theme.palette.success.main}`, // Darker green fill for progress
                    transform: `rotate(${mockUserProfile.profileCompletion * 3.6}deg)`, // For a full circle, 360/100 = 3.6
                    clipPath: `inset(0 0 ${100 - mockUserProfile.profileCompletion}% 0)`, // Adjust to fill from top
                    // This is a simplified CSS arc for demonstration. A proper arc would use conic-gradient or SVG.
                    // For a more accurate circular progress, consider a custom component using SVG or a MUI CircularProgress that overlays.
                  },
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', zIndex: 2 }}>
                  {mockUserProfile.profileCompletion}%
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>


        {/* Quick Access Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[
            { title: 'My Profile', description: 'View and update your personal information.', icon: <PersonIcon color="primary" sx={{ fontSize: 40 }} />, path: '/profile' },
            { title: 'Search Matches', description: 'Find profiles based on your preferences.', icon: <SearchIcon color="secondary" sx={{ fontSize: 40 }} />, path: '/search' },
            { title: 'Interests', description: 'Manage interests sent and received.', icon: <FavoriteBorderIcon sx={{ color: 'error.main', fontSize: 40 }} />, path: '/interests' },
            { title: 'Messages', description: 'Communicate with your matches.', icon: <MessageIcon color="info" sx={{ fontSize: 40 }} />, path: '/messages' },
            { title: 'Membership', description: 'Upgrade your plan for more features.', icon: <StarBorderIcon color="warning" sx={{ fontSize: 40 }} />, path: '/membership' },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={2.4} key={item.title}> {/* 2.4 for 5 items in a row */}
              <Link href={item.path} passHref legacyBehavior>
                <Paper
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    cursor: 'pointer',
                    '&:hover': { boxShadow: 6 },
                    minHeight: 150,
                  }}
                >
                  <Box sx={{ mb: 1 }}>{item.icon}</Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>{item.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{item.description}</Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* Recent Matches & Recent Messages Sections */}
        <Grid container spacing={4}>
          {/* Your Recent Matches */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Your Recent Matches</Typography>
                <Link href="/search" passHref legacyBehavior>
                  <Button endIcon={<ChevronRightIcon />} sx={{ textTransform: 'none' }}>View All</Button>
                </Link>
              </Box>
              <List sx={{ flexGrow: 1 }}>
                {mockRecentMatches.map((match, index) => (
                  <Box key={match.id}>
                    <ListItemButton alignItems="flex-start" sx={{ py: 1.5 }}>
                      <ListItemAvatar>
                        <Avatar alt={match.name} src={match.avatar} sx={{ width: 50, height: 50, mr: 1 }} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography component="span" variant="body1" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            {match.name}, {match.age}
                            <Typography component="span" variant="body2" sx={{ ml: 1, color: 'success.main', fontWeight: 'bold' }}>
                              {match.matchPercentage}% Match
                            </Typography>
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="text.primary">
                              {match.profession} • {match.location}
                            </Typography>
                            <Typography component="span" variant="body2" color="text.secondary" sx={{ display: 'block' }}>
                              {match.interests.join(', ')}
                            </Typography>
                          </>
                        }
                      />
                    </ListItemButton>
                    {index < mockRecentMatches.length - 1 && <Divider component="li" variant="inset" />}
                  </Box>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Recent Messages */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Recent Messages</Typography>
                <Link href="/messages" passHref legacyBehavior>
                  <Button endIcon={<ChevronRightIcon />} sx={{ textTransform: 'none' }}>View All</Button>
                </Link>
              </Box>
              <List sx={{ flexGrow: 1 }}>
                {mockRecentMessages.map((message, index) => (
                  <Box key={message.id}>
                    <ListItemButton alignItems="flex-start" sx={{ py: 1.5 }}>
                      <ListItemAvatar>
                        <Avatar alt={message.name} src={message.avatar} sx={{ width: 50, height: 50, mr: 1 }} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography component="span" variant="body1" sx={{ fontWeight: 'bold' }}>
                            {message.name}
                          </Typography>
                        }
                        secondary={
                          <Typography component="span" variant="body2" color="text.secondary" noWrap>
                            {message.message}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    {index < mockRecentMessages.length - 1 && <Divider component="li" variant="inset" />}
                  </Box>
                ))}
              </List>
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, textTransform: 'none' }}>
                New Message
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Personalized Suggestions (Title only for now) */}
        <Typography variant="h6" sx={{ mt: 5, mb: 2, fontWeight: 'bold' }}>
          Personalized Suggestions
        </Typography>
        {/* Placeholder for personalized suggestions content */}
        <Paper sx={{ p: 3, width: '100%', textAlign: 'center', color: 'text.secondary', py: 5 }}>
          More suggestions will appear here soon!
        </Paper>
      </Box>
    </Box>
  );
}