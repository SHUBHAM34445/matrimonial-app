// src/components/home/SearchBoxSection.js
"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use useRouter for programmatic navigation

export default function SearchBoxSection() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    ageMin: '',
    ageMax: '',
    religion: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Construct query parameters for the search page
    const query = new URLSearchParams(searchParams).toString();
    router.push(`/search?${query}`);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: 2, backgroundColor: '#e3f2fd', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
        Find Your Perfect Match Instantly
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: { xs: 4, md: 6 }, maxWidth: 700, mx: 'auto' }}>
        Start your search with our quick match finder. Enter your preferences to discover compatible profiles.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          maxWidth: 900,
          mx: 'auto',
          p: 3,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          alignItems: 'center',
        }}
      >
        <TextField
          label="Min Age"
          name="ageMin"
          value={searchParams.ageMin}
          onChange={handleChange}
          type="number"
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
        />
        <TextField
          label="Max Age"
          name="ageMax"
          value={searchParams.ageMax}
          onChange={handleChange}
          type="number"
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
        />
        <FormControl variant="outlined" size="small" sx={{ flex: 1 }}>
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
            {/* Add more religions as needed */}
          </Select>
        </FormControl>
        <TextField
          label="Location"
          name="location"
          value={searchParams.location}
          onChange={handleChange}
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ flexShrink: 0, height: '40px', textTransform: 'none' }} // Match height with small text fields
        >
          Search Now
        </Button>
      </Box>
    </Box>
  );
}