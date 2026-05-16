// src/app/(main)/profile/edit/page.js
"use client"; // This is a Client Component
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

export default function EditProfilePage() {
  // Mock initial data - this would come from fetching the user's current profile
  const [formData, setFormData] = useState({
    name: 'John Doe',
    age: 30,
    height: "5'9''",
    religion: 'Hindu',
    profession: 'Software Engineer',
    about: 'Passionate about technology and traveling. Seeking a kind and understanding partner.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    // TODO: Send updated data to Strapi API
    alert('Profile updated successfully!');
    // Optionally redirect to /profile
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Edit My Profile
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          type="number"
          variant="outlined"
        />
        <TextField
          label="Height"
          name="height"
          value={formData.height}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          placeholder="e.g., 5'9''"
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel>Religion</InputLabel>
          <Select
            label="Religion"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
          >
            <MenuItem value="Hindu">Hindu</MenuItem>
            <MenuItem value="Christian">Christian</MenuItem>
            <MenuItem value="Muslim">Muslim</MenuItem>
            {/* ... other religions */}
          </Select>
        </FormControl>
        <TextField
          label="Profession"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="About Me"
          name="about"
          value={formData.about}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          variant="outlined"
        />
        {/* Add more fields for family, education, lifestyle, photos etc. */}
        <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}