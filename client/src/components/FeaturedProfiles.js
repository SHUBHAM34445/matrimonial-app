// // // src/components/home/FeaturedProfiles.js
// // "use client";
// // import Box from '@mui/material/Box';
// // import Typography from '@mui/material/Typography';
// // import Grid from '@mui/material/Grid';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Button from '@mui/material/Button';
// // import Link from 'next/link';
// // import Chip from '@mui/material/Chip';
// // import Stack from '@mui/material/Stack';

// // export default function FeaturedProfiles() {
// //   // Mock data for featured profiles - replace with actual data from Strapi
// //   const profiles = [
// //     {
// //       id: 'profile1',
// //       name: 'Sneha S.',
// //       age: 28,
// //       height: "5'4''",
// //       profession: 'Software Engineer',
// //       location: 'Bengaluru',
// //       photo: 'https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-isolated_158538-8585.jpg?ga=GA1.1.1597830310.1734608040&semt=ais_hybrid&w=740', // Placeholder
// //       interests: ['Reading', 'Hiking', 'Cooking'],
// //     },
// //     {
// //       id: 'profile2',
// //       name: 'Chaitanya Rao',
// //       age: 32,
// //       height: "5'10''",
// //       profession: 'Marketing Manager',
// //       location: 'Mumbai',
// //       photo: 'https://img.freepik.com/free-photo/portrait-cheerful-photographer-studio_158595-509.jpg?ga=GA1.1.1597830310.1734608040&semt=ais_hybrid&w=740', // Placeholder
// //       interests: ['Photography', 'Travel', 'Sports'],
// //     },
// //     {
// //       id: 'profile3',
// //       name: 'Anjali',
// //       age: 27,
// //       height: "5'6''",
// //       profession: 'Doctor',
// //       location: 'Delhi',
// //       photo: 'https://img.freepik.com/free-photo/portrait-stylish-glam-girl-sunglasses-laughing-smiling-standing-holiday-pink-background_1258-86148.jpg?ga=GA1.1.1597830310.1734608040&semt=ais_hybrid&w=740', // Placeholder
// //       interests: ['Yoga', 'Music', 'Gardening'],
// //     },
// //     {
// //       id: 'profile4',
// //       name: 'Darshana Reddy',
// //       age: 30,
// //       height: "5'11''",
// //       profession: 'Architect',
// //       location: 'Hyderabad',
// //       photo: 'https://img.freepik.com/premium-photo/stylish-young-woman-radiates-confidence-trendy-casual-outfit-against-minimalist-backdrop_1326977-13394.jpg?ga=GA1.1.1597830310.1734608040&semt=ais_hybrid&w=740', // Placeholder
// //       interests: ['Movies', 'Gaming', 'Fitness'],
// //     },
// //   ];

// //   return (
// //     <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#ffffff', textAlign: 'center' }}>
// //       <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
// //         Featured Profiles
// //       </Typography>
// //       <Grid container spacing={4} justifyContent="center">
// //         {profiles.map((profile) => (
// //           <Grid sx={{width: '300px'}} item xs={12} sm={6} md={3} key={profile.id}>
// //             <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2 }}>
// //               <CardMedia
// //                 component="img"
// //                 height="300"
// //                 image={profile.photo}
// //                 alt={profile.name}
// //                 sx={{ objectFit: 'cover' }}
// //               />
// //               <CardContent sx={{ flexGrow: 1 }}>
// //                 <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
// //                   {profile.name}, {profile.age}
// //                 </Typography>
// //                 <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
// //                   {profile.height} | {profile.profession}
// //                 </Typography>
// //                 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
// //                   {profile.location}
// //                 </Typography>
// //                 <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
// //                   {profile.interests.map((interest, index) => (
// //                     <Chip key={index} label={interest} size="small" color="primary" variant="outlined" />
// //                   ))}
// //                 </Stack>
// //               </CardContent>
// //               <Box sx={{ p: 2, pt: 0, textAlign: 'center' }}>
// //                 <Link href={`/profile/${profile.id}`} passHref legacyBehavior>
// //                   <Button variant="outlined" color="primary" fullWidth sx={{ textTransform: 'none' }}>
// //                     View Profile
// //                   </Button>
// //                 </Link>
// //               </Box>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //       <Link href="/search" passHref legacyBehavior>
// //         <Button variant="contained" color="primary" size="large" sx={{ mt: { xs: 4, md: 6 }, textTransform: 'none' }}>
// //           View All Profiles
// //         </Button>
// //       </Link>
// //     </Box>
// //   );
// // }













// "use client";

// import { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Link from 'next/link';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
// import Image from 'next/image';
// import CircularProgress from '@mui/material/CircularProgress';
// import Alert from '@mui/material/Alert';

// const STRAPI_BASE_URL = 'http://localhost:1337'; // Your Strapi backend URL

// export default function FeaturedProfiles() {
//   const [profiles, setProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         // API call is correct, now that populate=profilePicture works!
//         const response = await fetch(`${STRAPI_BASE_URL}/api/user-profiles?populate=profilePicture`);

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const jsonResponse = await response.json();

//         const fetchedProfiles = jsonResponse.data.map(item => {
//           // Calculate age
//           const dob = new Date(item.dateOfBirth);
//           const today = new Date();
//           let age = today.getFullYear() - dob.getFullYear();
//           const m = today.getMonth() - dob.getMonth();
//           if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
//             age--;
//           }

//           // *** CRITICAL CHANGE HERE: Access item.profilePicture.url directly ***
//           const photoUrl = item.profilePicture && item.profilePicture.url
//             ? `${STRAPI_BASE_URL}${item.profilePicture.url}`
//             : '/default-avatar.png'; // Path to a default image in your public folder

//           return {
//             id: item.id,
//             name: `${item.firstName} ${item.lastName ? item.lastName.charAt(0) + '.' : ''}`,
//             age: age,
//             height: item.height,
//             profession: item.profession,
//             location: `${item.city}, ${item.state}`,
//             photo: photoUrl,
//             interests: item.hobbies || [],
//           };
//         });

//         setProfiles(fetchedProfiles.slice(0, 4)); // Displaying first 4 as featured
//       } catch (err) {
//         console.error("Failed to fetch featured profiles:", err);
//         setError("Failed to load featured profiles. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfiles();
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
//         <CircularProgress />
//         <Typography variant="h6" sx={{ ml: 2 }}>Loading featured profiles...</Typography>
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto', mt: 4 }}>
//         <Alert severity="error">{error}</Alert>
//       </Box>
//     );
//   }

//   if (profiles.length === 0) {
//     return (
//       <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#ffffff', textAlign: 'center' }}>
//         <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
//           Featured Profiles
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           No featured profiles available at the moment.
//         </Typography>
//         <Link href={`/profile/${profile.id}`} passHref legacyBehavior>
//           <Button variant="contained" color="primary" size="large" sx={{ mt: { xs: 4, md: 6 }, textTransform: 'none' }}>
//             View All Profiles
//           </Button>
//         </Link>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#ffffff', textAlign: 'center' }}>
//       <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
//         Featured Profiles
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {profiles.map((profile) => (
//           <Grid sx={{ width: '300px' }} item xs={12} sm={6} md={3} key={profile.id}>
//             <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2 }}>
//               <Box sx={{ width: '100%', height: 300, position: 'relative' }}>
//                 <img
//                   src={profile.photo}
//                   alt={profile.name}
//                   fill
//                   style={{ objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', width: '100%', height: '100%' }}
//                   // sizes="(max-width: 200px) 10vw, (max-width: 100px) 10vw, 15vw"
//                   priority={true}
//                 />
//               </Box>
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
//                   {profile.name}, {profile.age}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//                   {profile.height} | {profile.profession}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                   {profile.location}
//                 </Typography>
//                 <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" justifyContent="center">
//                   {profile.interests.map((interest, index) => (
//                     <Chip key={index} label={interest} size="small" color="primary" variant="outlined" />
//                   ))}
//                 </Stack>
//               </CardContent>
//               <Box sx={{ p: 2, pt: 0, textAlign: 'center' }}>
//                 <Link href={`/profile/${profile.id}`} passHref legacyBehavior>
//                   <Button variant="outlined" color="primary" fullWidth sx={{ textTransform: 'none' }}>
//                     View Profile
//                   </Button>
//                 </Link>
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Link href="/search" passHref legacyBehavior>
//         <Button variant="contained" color="primary" size="large" sx={{ mt: { xs: 4, md: 6 }, textTransform: 'none' }}>
//           View All Profiles
//         </Button>
//       </Link>
//     </Box>
//   );
// }














// client/src/components/FeaturedProfiles.js
"use client";

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const STRAPI_BASE_URL = 'http://localhost:1337'; // Your Strapi backend URL

export default function FeaturedProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch(`${STRAPI_BASE_URL}/api/user-profiles?populate=profilePicture`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonResponse = await response.json();

        // Data access remains flattened as per your Strapi output
        const fetchedProfiles = jsonResponse.data.map(item => {

          // Calculate age
          const dob = new Date(item.dateOfBirth);
          const today = new Date();
          let age = today.getFullYear() - dob.getFullYear();
          const m = today.getMonth() - dob.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
          }

          // Access profilePicture: still assuming nested data.attributes.url for populated fields
          const photoUrl = item.profilePicture && item.profilePicture.data && item.profilePicture.data.attributes
            ? `${STRAPI_BASE_URL}${item.profilePicture.data.attributes.url}`
            : '/default-avatar.png'; // Path to a default image in your public folder

          return {
            id: item.id, // Keep original Strapi ID
            documentId: item.documentId, // Add documentId for linking
            name: `${item.firstName} ${item.lastName ? item.lastName.charAt(0) + '.' : ''}`,
            age: age,
            height: item.height,
            profession: item.profession,
            location: `${item.city}, ${item.state}`,
            photo: photoUrl,
            interests: item.hobbies || [],
          };
        });

        setProfiles(fetchedProfiles.slice(0, 4)); // Displaying first 4 as featured
      } catch (err) {
        console.error("Failed to fetch featured profiles:", err);
        setError("Failed to load featured profiles. Please try again later. Check browser console for details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>Loading featured profiles...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto', mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (profiles.length === 0) {
    return (
      <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
          Featured Profiles
        </Typography>
        <Typography variant="body1" color="text.secondary">
          No featured profiles available at the moment.
        </Typography>
        <Link href="/search" passHref legacyBehavior>
          <Button variant="contained" color="primary" size="large" sx={{ mt: { xs: 4, md: 6 }, textTransform: 'none' }}>
            View All Profiles
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#ffffff', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
        Featured Profiles
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {profiles.map((profile) => (
          <Grid sx={{ width: '300px' }} item xs={12} sm={6} md={3} key={profile.id}> {/* Key can still be original ID */}
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2 }}>
              <Box sx={{ width: '100%', height: 300, position: 'relative' }}>
                <img
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  style={{ objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  priority={true}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {profile.name}, {profile.age}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {profile.height} | {profile.profession}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {profile.location}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" justifyContent="center">
                  {profile.interests.map((interest, index) => (
                    <Chip key={index} label={interest} size="small" color="primary" variant="outlined" />
                  ))}
                </Stack>
              </CardContent>
              <Box sx={{ p: 2, pt: 0, textAlign: 'center' }}>
                {/* CRITICAL CHANGE: Link to the profile using documentId */}
                <Link href={`/profile/${profile.documentId}`} passHref legacyBehavior>
                  <Button variant="outlined" color="primary" fullWidth sx={{ textTransform: 'none' }}>
                    View Profile
                  </Button>
                </Link>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Link href="/search" passHref legacyBehavior>
        <Button variant="contained" color="primary" size="large" sx={{ mt: { xs: 4, md: 6 }, textTransform: 'none' }}>
          View All Profiles
        </Button>
      </Link>
    </Box>
  );
}