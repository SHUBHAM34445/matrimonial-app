// src/app/(main)/interests/page.js
"use client"; // This is a Client Component
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from 'next/link';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function InterestsPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Mock data for interests
  const receivedInterests = [
    { id: 1, name: 'Priya Sharma', age: 27, photo: 'https://via.placeholder.com/50/FFD700/FFFFFF?text=PS', status: 'Pending' },
    { id: 2, name: 'Ankit Gupta', age: 31, photo: 'https://via.placeholder.com/50/C0C0C0/FFFFFF?text=AG', status: 'Pending' },
  ];

  const sentInterests = [
    { id: 3, name: 'Deepa Singh', age: 29, photo: 'https://via.placeholder.com/50/FFA500/FFFFFF?text=DS', status: 'Accepted' },
    { id: 4, name: 'Vikram Reddy', age: 33, photo: 'https://via.placeholder.com/50/800080/FFFFFF?text=VR', status: 'Pending' },
  ];

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Interests
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="interests tabs">
          <Tab label="Received Interests" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="Sent Interests" id="tab-1" aria-controls="tabpanel-1" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Typography variant="h6" gutterBottom>
          Interests Received
        </Typography>
        {receivedInterests.length === 0 ? (
          <Typography variant="body2" color="text.secondary">No new interests.</Typography>
        ) : (
          <List>
            {receivedInterests.map((interest, index) => (
              <Box key={interest.id}>
                <ListItem
                  alignItems="flex-start"
                  secondaryAction={
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {interest.status === 'Pending' && (
                        <>
                          <Button size="small" variant="contained" color="primary">Accept</Button>
                          <Button size="small" variant="outlined" color="error">Decline</Button>
                        </>
                      )}
                      {interest.status === 'Accepted' && (
                        <Button size="small" variant="outlined">View Contact</Button>
                      )}
                    </Box>
                  }
                >
                  <ListItemAvatar>
                    <Avatar alt={interest.name} src={interest.photo} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Link href={`/profile/${interest.id}`} passHref legacyBehavior>
                        <Typography component="a" variant="body1" sx={{ fontWeight: 'bold' }}>
                          {interest.name} ({interest.age})
                        </Typography>
                      </Link>
                    }
                    secondary={`Status: ${interest.status}`}
                  />
                </ListItem>
                {index < receivedInterests.length - 1 && <Divider component="li" />}
              </Box>
            ))}
          </List>
        )}
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Typography variant="h6" gutterBottom>
          Interests Sent
        </Typography>
        {sentInterests.length === 0 ? (
          <Typography variant="body2" color="text.secondary">You haven't sent any interests yet.</Typography>
        ) : (
          <List>
            {sentInterests.map((interest, index) => (
              <Box key={interest.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={interest.name} src={interest.photo} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Link href={`/profile/${interest.id}`} passHref legacyBehavior>
                        <Typography component="a" variant="body1" sx={{ fontWeight: 'bold' }}>
                          {interest.name} ({interest.age})
                        </Typography>
                      </Link>
                    }
                    secondary={`Status: ${interest.status}`}
                  />
                </ListItem>
                {index < sentInterests.length - 1 && <Divider component="li" />}
              </Box>
            ))}
          </List>
        )}
      </TabPanel>
    </Box>
  );
}