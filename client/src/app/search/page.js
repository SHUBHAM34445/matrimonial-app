// src/app/(main)/search/page.js
"use client"; // This is a Client Component
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useState({
    ageMin: 25,
    ageMax: 35,
    religion: '',
    location: '',
  });
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSearchResults([]); // Clear previous results
    console.log('Searching with:', searchParams);
    // TODO: Implement search logic with Strapi API
    // Example mock data:
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSearchResults([
      { id: 'user123', name: 'Jane Smith', age: 28, height: "5'5''", profession: 'Doctor', location: 'Bengaluru', photo: 'https://via.placeholder.com/100/FF0000/FFFFFF?text=JS' },
      { id: 'user124', name: 'Rahul Sharma', age: 32, height: "5'11''", profession: 'Engineer', location: 'Delhi', photo: 'https://via.placeholder.com/100/00FF00/FFFFFF?text=RS' },
      { id: 'user125', name: 'Priya Singh', age: 29, height: "5'3''", profession: 'Designer', location: 'Mumbai', photo: 'https://via.placeholder.com/100/0000FF/FFFFFF?text=PS' },
    ]);
    setLoading(false);
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Find Your Match
      </Typography>

      <Box component="form" onSubmit={handleSearch} sx={{ mb: 4, p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Min Age"
              name="ageMin"
              value={searchParams.ageMin}
              onChange={handleChange}
              fullWidth
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Max Age"
              name="ageMax"
              value={searchParams.ageMax}
              onChange={handleChange}
              fullWidth
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Religion</InputLabel>
              <Select
                label="Religion"
                name="religion"
                value={searchParams.religion}
                onChange={handleChange}
              >
                <MenuItem value="">Any</MenuItem>
                <MenuItem value="Hindu">Hindu</MenuItem>
                <MenuItem value="Christian">Christian</MenuItem>
                <MenuItem value="Muslim">Muslim</MenuItem>
                {/* ... other religions */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Location"
              name="location"
              value={searchParams.location}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          {/* Add more advanced search filters here (e.g., profession, marital status, education) */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search Matches'}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
        Search Results ({searchResults.length})
      </Typography>

      {searchResults.length === 0 && !loading && (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
          No matches found. Try adjusting your search criteria.
        </Typography>
      )}

      <Grid container spacing={3}>
        {searchResults.map((profile) => (
          <Grid item xs={12} sm={6} md={4} key={profile.id}>
            <Link href={`/profile/${profile.id}`} passHref legacyBehavior>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', '&:hover': { boxShadow: 6 } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={profile.photo}
                  alt={profile.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {profile.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {profile.age} yrs | {profile.height}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {profile.profession}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {profile.location}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                  <Button size="small">View Profile</Button>
                  <Button size="small" variant="contained">Send Interest</Button>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}