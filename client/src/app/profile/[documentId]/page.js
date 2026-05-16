// // // src/app/profile/[id]/page.js
// // // This component will fetch and display a single user's detailed profile.

// // import { notFound } from 'next/navigation'; // Import for handling 404 cases
// // import Box from '@mui/material/Box';
// // import Typography from '@mui/material/Typography';
// // import Grid from '@mui/material/Grid';
// // import Paper from '@mui/material/Paper';
// // import Avatar from '@mui/material/Avatar';
// // import Chip from '@mui/material/Chip';
// // import Stack from '@mui/material/Stack';
// // import { BlocksRenderer } from '@strapi/blocks-react-renderer'; // Used for rich text 'aboutMe' field

// // const STRAPI_BASE_URL = 'http://localhost:1337'; // Your Strapi backend URL

// // // Function to fetch a single user profile based on ID
// // async function getProfile(id) {
// //   try {
// //     // Fetch data for the specific profile, populate profilePicture and aboutMe (rich text)
// //     const response = await fetch(`${STRAPI_BASE_URL}/api/user-profiles/${id}?populate=profilePicture&populate=aboutMe`);

// //     if (!response.ok) {
// //       if (response.status === 404) {
// //         // If profile not found, return null to trigger notFound()
// //         return null;
// //       }
// //       throw new Error(`Failed to fetch profile: ${response.statusText}`);
// //     }

// //     const jsonResponse = await response.json();

// //     // If data is empty (e.g., ID exists but no actual data), return null
// //     if (!jsonResponse.data) {
// //       return null;
// //     }

// //     const item = jsonResponse.data;

// //     // Calculate age from dateOfBirth
// //     const dob = new Date(item.dateOfBirth);
// //     const today = new Date();
// //     let age = today.getFullYear() - dob.getFullYear();
// //     const m = today.getMonth() - dob.getMonth();
// //     if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
// //       age--;
// //     }

// //     // Construct the full URL for the profile picture
// //     const photoUrl = item.profilePicture && item.profilePicture.url
// //       ? `${STRAPI_BASE_URL}${item.profilePicture.url}`
// //       : '/default-avatar.png'; // Fallback to a default image

// //     // Map fetched data to a more convenient structure
// //     return {
// //       id: item.id,
// //       firstName: item.firstName,
// //       lastName: item.lastName,
// //       fullName: `${item.firstName} ${item.lastName || ''}`, // Handle cases where lastName might be null
// //       age: age,
// //       gender: item.gender,
// //       height: item.height,
// //       maritalStatus: item.maritalStatus,
// //       religion: item.religion,
// //       caste: item.caste,
// //       motherTongue: item.motherTongue,
// //       educationLevel: item.educationLevel,
// //       profession: item.profession,
// //       income: item.income,
// //       country: item.country,
// //       state: item.state,
// //       city: item.city,
// //       aboutMe: item.aboutMe, // This will be the Lexical JSON from Strapi's rich text field
// //       partnerPreferences: item.partnerPreferences,
// //       contactNumber: item.contactNumber,
// //       whatsappNumber: item.whatsappNumber,
// //       diet: item.diet,
// //       smokingHabits: item.smokingHabits,
// //       drinkingHabits: item.drinkingHabits,
// //       isVerified: item.isVerified,
// //       profileCompletionPercentage: item.profileCompletionPercentage,
// //       dateOfBirth: item.dateOfBirth,
// //       hobbies: item.hobbies || [], // Ensure hobbies is an array, even if null/undefined
// //       profilePicture: photoUrl,
// //     };
// //   } catch (error) {
// //     console.error("Error fetching profile:", error);
// //     // You might want to handle this error more gracefully, e.g., show a generic error page
// //     return null;
// //   }
// // }

// // // The main ProfilePage component (Server Component)
// // export default async function ProfilePage({ params }) {
// //   const { id } = params; // Extract the dynamic ID from the URL

// //   const profile = await getProfile(id); // Fetch the profile data

// //   // If no profile is found (e.g., 404 from API), show Next.js's 404 page
// //   if (!profile) {
// //     notFound();
// //   }

// //   return (
// //     <Box sx={{ flexGrow: 1, p: 4, maxWidth: 1000, mx: 'auto', mt: 4 }}>
// //       <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
// //         <Grid container spacing={4}>
// //           {/* Left Column: Profile Picture and Basic Info */}
// //           <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
// //             <Avatar
// //               alt={profile.fullName}
// //               src={profile.profilePicture}
// //               sx={{ width: 200, height: 200, mx: 'auto', mb: 2, border: '2px solid #ccc' }}
// //             />
// //             <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
// //               {profile.fullName}, {profile.age}
// //             </Typography>
// //             <Typography variant="body1" color="text.secondary">
// //               {profile.profession}
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               {profile.city}, {profile.state}, {profile.country}
// //             </Typography>
// //             <Box sx={{ mt: 2 }}>
// //                 <Chip label={profile.maritalStatus} variant="outlined" sx={{ mr: 1, mb: 1 }} />
// //                 <Chip label={profile.religion} variant="outlined" sx={{ mr: 1, mb: 1 }} />
// //                 <Chip label={profile.caste} variant="outlined" sx={{ mr: 1, mb: 1 }} />
// //             </Box>
// //           </Grid>

// //           {/* Right Column: Detailed Information */}
// //           <Grid item xs={12} md={8}>
// //             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
// //               About Me
// //             </Typography>
// //             {/* Render rich text content using BlocksRenderer */}
// //             {profile.aboutMe && profile.aboutMe.length > 0 ? (
// //                 <Box sx={{ '& p': { margin: 0, mb: 1 } }}> {/* Basic styling for paragraphs */}
// //                     <BlocksRenderer content={profile.aboutMe} />
// //                 </Box>
// //             ) : (
// //                 <Typography variant="body2" color="text.secondary">
// //                     No "About Me" information provided yet.
// //                 </Typography>
// //             )}

// //             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
// //               Personal Details
// //             </Typography>
// //             <Grid container spacing={1}>
// //                 <Grid item xs={6}><Typography variant="body2">Gender: **{profile.gender}**</Typography></Grid>
// //                 <Grid item xs={6}><Typography variant="body2">Height: **{profile.height}**</Typography></Grid>
// //                 <Grid item xs={6}><Typography variant="body2">Mother Tongue: **{profile.motherTongue}**</Typography></Grid>
// //                 <Grid item xs={6}><Typography variant="body2">Diet: **{profile.diet}**</Typography></Grid>
// //                 <Grid item xs={6}><Typography variant="body2">Smoking Habits: **{profile.smokingHabits}**</Typography></Grid>
// //                 <Grid item xs={6}><Typography variant="body2">Drinking Habits: **{profile.drinkingHabits}**</Typography></Grid>
// //                 <Grid item xs={6}><Typography variant="body2">Education: **{profile.educationLevel}**</Typography></Grid>
// //                 <Grid item xs={6}><Typography variant="body2">Income: **{profile.income}**</Typography></Grid>
// //             </Grid>

// //             {/* Hobbies Section */}
// //             {profile.hobbies && profile.hobbies.length > 0 && (
// //                 <>
// //                     <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
// //                     Hobbies
// //                     </Typography>
// //                     <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
// //                         {profile.hobbies.map((hobby, index) => (
// //                             <Chip key={index} label={hobby} size="small" color="secondary" variant="filled" />
// //                         ))}
// //                     </Stack>
// //                 </>
// //             )}

// //             {/* Partner Preferences Section */}
// //             {profile.partnerPreferences && (
// //                 <>
// //                     <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
// //                         Partner Preferences
// //                     </Typography>
// //                     <Grid container spacing={1}>
// //                         <Grid item xs={6}><Typography variant="body2">Age Range: **{profile.partnerPreferences.ageRange}**</Typography></Grid>
// //                         <Grid item xs={6}><Typography variant="body2">Location: **{profile.partnerPreferences.location}**</Typography></Grid>
// //                         <Grid item xs={6}><Typography variant="body2">Religion: **{profile.partnerPreferences.religion}**</Typography></Grid>
// //                     </Grid>
// //                 </>
// //             )}

// //             {/* Contact Information (Optional - consider privacy) */}
// //             {/* <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
// //               Contact
// //             </Typography>
// //             <Typography variant="body2">Contact No: {profile.contactNumber}</Typography>
// //             <Typography variant="body2">WhatsApp No: {profile.whatsappNumber}</Typography> */}

// //           </Grid>
// //         </Grid>
// //       </Paper>
// //     </Box>
// //   );
// // }

// // // Optional: If you want to pre-render (SSG) specific profile pages at build time
// // // export async function generateStaticParams() {
// // //   // Fetch all profile IDs that you want to pre-render
// // //   const response = await fetch(`${STRAPI_BASE_URL}/api/user-profiles`);
// // //   const jsonResponse = await response.json();
// // //   return jsonResponse.data.map((item) => ({
// // //     id: item.id.toString(), // ID must be a string
// // //   }));
// // // }









// // src/app/profile/[id]/page.js
// // This component will fetch and display a single user's detailed profile.

// import { notFound } from 'next/navigation'; // Import for handling 404 cases
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Avatar from '@mui/material/Avatar';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
// // Removed: import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// const STRAPI_BASE_URL = 'http://localhost:1337'; // Your Strapi backend URL

// // Function to fetch a single user profile based on ID
// async function getProfile(id) {
//   try {
//     // Fetch data for the specific profile, populate profilePicture and aboutMe
//     // We still populate aboutMe even if we don't render rich text,
//     // in case you want to process it differently later or switch to plain text.
//     const response = await fetch(`${STRAPI_BASE_URL}/api/user-profiles/${id}?populate=profilePicture&populate=aboutMe`);

//     if (!response.ok) {
//       if (response.status === 404) {
//         return null;
//       }
//       throw new Error(`Failed to fetch profile: ${response.statusText}`);
//     }

//     const jsonResponse = await response.json();

//     if (!jsonResponse.data) {
//       return null;
//     }

//     const item = jsonResponse.data;

//     // Calculate age from dateOfBirth
//     const dob = new Date(item.dateOfBirth);
//     const today = new Date();
//     let age = today.getFullYear() - dob.getFullYear();
//     const m = today.getMonth() - dob.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
//       age--;
//     }

//     // Construct the full URL for the profile picture
//     const photoUrl = item.profilePicture && item.profilePicture.url
//       ? `${STRAPI_BASE_URL}${item.profilePicture.url}`
//       : '/default-avatar.png'; // Fallback to a default image

//     // Map fetched data to a more convenient structure
//     return {
//       id: item.id,
//       firstName: item.firstName,
//       lastName: item.lastName,
//       fullName: `${item.firstName} ${item.lastName || ''}`,
//       age: age,
//       gender: item.gender,
//       height: item.height,
//       maritalStatus: item.maritalStatus,
//       religion: item.religion,
//       caste: item.caste,
//       motherTongue: item.motherTongue,
//       educationLevel: item.educationLevel,
//       profession: item.profession,
//       income: item.income,
//       country: item.country,
//       state: item.state,
//       city: item.city,
//       aboutMe: item.aboutMe, // This will be the Lexical JSON
//       partnerPreferences: item.partnerPreferences,
//       contactNumber: item.contactNumber,
//       whatsappNumber: item.whatsappNumber,
//       diet: item.diet,
//       smokingHabits: item.smokingHabits,
//       drinkingHabits: item.drinkingHabits,
//       isVerified: item.isVerified,
//       profileCompletionPercentage: item.profileCompletionPercentage,
//       dateOfBirth: item.dateOfBirth,
//       hobbies: item.hobbies || [],
//       profilePicture: photoUrl,
//     };
//   } catch (error) {
//     console.error("Error fetching profile:", error);
//     return null;
//   }
// }

// // The main ProfilePage component (Server Component)
// export default async function ProfilePage({ props }) {
//   // const { id } = params;

//   // const profile = await getProfile(id);
//   const id = props.params.id; // Extract the dynamic ID from the URL  


//   if (!profile) {
//     notFound();
//   }

//   return (
//     <Box sx={{ flexGrow: 1, p: 4, maxWidth: 1000, mx: 'auto', mt: 4 }}>
//       <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
//         <Grid container spacing={4}>
//           {/* Left Column: Profile Picture and Basic Info */}
//           <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
//             <Avatar
//               alt={profile.fullName}
//               src={profile.profilePicture}
//               sx={{ width: 200, height: 200, mx: 'auto', mb: 2, border: '2px solid #ccc' }}
//             />
//             <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
//               {profile.fullName}, {profile.age}
//             </Typography>
//             <Typography variant="body1" color="text.secondary">
//               {profile.profession}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {profile.city}, {profile.state}, {profile.country}
//             </Typography>
//             <Box sx={{ mt: 2 }}>
//                 <Chip label={profile.maritalStatus} variant="outlined" sx={{ mr: 1, mb: 1 }} />
//                 <Chip label={profile.religion} variant="outlined" sx={{ mr: 1, mb: 1 }} />
//                 <Chip label={profile.caste} variant="outlined" sx={{ mr: 1, mb: 1 }} />
//             </Box>
//           </Grid>

//           {/* Right Column: Detailed Information */}
//           <Grid item xs={12} md={8}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//               About Me
//             </Typography>
//             {/* Direct rendering of aboutMe will not show rich text formatting.
//                 It will likely show '[object Object]' if 'aboutMe' is Lexical JSON.
//                 Consider changing 'aboutMe' field type in Strapi to 'Long text' (plain text)
//                 if you don't want to use @strapi/blocks-react-renderer.
//             */}
//             {profile.aboutMe ? (
//                  // If aboutMe is Lexical JSON, this will render as [object Object].
//                  // If you change 'aboutMe' to 'Long text' in Strapi, it will render as plain text.
//                 <Typography variant="body2" color="text.secondary">
//                     {typeof profile.aboutMe === 'string' ? profile.aboutMe : 'About Me content (rich text) cannot be displayed without a dedicated renderer.'}
//                 </Typography>
//             ) : (
//                 <Typography variant="body2" color="text.secondary">
//                     No "About Me" information provided yet.
//                 </Typography>
//             )}

//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
//               Personal Details
//             </Typography>
//             <Grid container spacing={1}>
//                 <Grid item xs={6}><Typography variant="body2">Gender: **{profile.gender}**</Typography></Grid>
//                 <Grid item xs={6}><Typography variant="body2">Height: **{profile.height}**</Typography></Grid>
//                 <Grid item xs={6}><Typography variant="body2">Mother Tongue: **{profile.motherTongue}**</Typography></Grid>
//                 <Grid item xs={6}><Typography variant="body2">Diet: **{profile.diet}**</Typography></Grid>
//                 <Grid item xs={6}><Typography variant="body2">Smoking Habits: **{profile.smokingHabits}**</Typography></Grid>
//                 <Grid item xs={6}><Typography variant="body2">Drinking Habits: **{profile.drinkingHabits}**</Typography></Grid>
//                 <Grid item xs={6}><Typography variant="body2">Education: **{profile.educationLevel}**</Typography></Grid>
//                 <Grid item xs={6}><Typography variant="body2">Income: **{profile.income}**</Typography></Grid>
//             </Grid>

//             {/* Hobbies Section */}
//             {profile.hobbies && profile.hobbies.length > 0 && (
//                 <>
//                     <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
//                     Hobbies
//                     </Typography>
//                     <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
//                         {profile.hobbies.map((hobby, index) => (
//                             <Chip key={index} label={hobby} size="small" color="secondary" variant="filled" />
//                         ))}
//                     </Stack>
//                 </>
//             )}

//             {/* Partner Preferences Section */}
//             {profile.partnerPreferences && (
//                 <>
//                     <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
//                         Partner Preferences
//                     </Typography>
//                     <Grid container spacing={1}>
//                         <Grid item xs={6}><Typography variant="body2">Age Range: **{profile.partnerPreferences.ageRange}**</Typography></Grid>
//                         <Grid item xs={6}><Typography variant="body2">Location: **{profile.partnerPreferences.location}**</Typography></Grid>
//                         <Grid item xs={6}><Typography variant="body2">Religion: **{profile.partnerPreferences.religion}**</Typography></Grid>
//                     </Grid>
//                 </>
//             )}
//           </Grid>
//         </Grid>
//       </Paper>
//     </Box>
//   );
// }













// src/app/profile/[id]/page.js
// This component will fetch and display a single user's detailed profile.
// client/src/app/profile/[documentId]/page.js
// This component will fetch and display a single user's detailed profile.

import { notFound } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const STRAPI_BASE_URL = 'http://localhost:1337'; // Your Strapi backend URL

// Function to fetch a single user profile based on documentId
// 'docId' here refers to the documentId string passed from the URL
async function getProfile(docId) {
  try {
    // CRITICAL CHANGE: Use filters for documentId to fetch a single profile
    const response = await fetch(`${STRAPI_BASE_URL}/api/user-profiles?filters[documentId][$eq]=${docId}&populate=profilePicture&populate=aboutMe`);

    if (!response.ok) {
      if (response.status === 404) {
        return null; // Not Found
      }
      if (response.status === 403) {
        console.error("Permission Denied: Check Strapi roles (Public role) for 'find' and 'findOne' permissions on 'user-profiles'.");
        throw new Error(`Failed to fetch profile: Access Forbidden. Please check backend permissions.`);
      }
      throw new Error(`Failed to fetch profile: ${response.statusText || response.status}`);
    }

    const jsonResponse = await response.json();

    // When fetching with filters, 'data' will be an array. We expect one result.
    if (!jsonResponse.data || jsonResponse.data.length === 0) {
      return null; // No profile found with that documentId
    }

    // Get the first (and hopefully only) profile from the results
    const item = jsonResponse.data[0];

    // Data access logic remains flattened as per your Strapi output
    // Calculate age from dateOfBirth
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
      : '/default-avatar.png'; // Fallback to a default image

    // Map fetched data to a more convenient structure
    return {
      id: item.id, // Keep original Strapi ID
      documentId: item.documentId, // This is the field we are fetching by
      firstName: item.firstName,
      lastName: item.lastName,
      fullName: `${item.firstName} ${item.lastName || ''}`,
      age: age,
      gender: item.gender,
      height: item.height,
      maritalStatus: item.maritalStatus,
      religion: item.religion,
      caste: item.caste,
      motherTongue: item.motherTongue,
      educationLevel: item.educationLevel,
      profession: item.profession,
      income: item.income,
      country: item.country,
      state: item.state,
      city: item.city,
      aboutMe: item.aboutMe,
      partnerPreferences: item.partnerPreferences,
      contactNumber: item.contactNumber,
      whatsappNumber: item.whatsappNumber,
      diet: item.diet,
      smokingHabits: item.smokingHabits,
      drinkingHabits: item.drinkingHabits,
      isVerified: item.isVerified,
      profileCompletionPercentage: item.profileCompletionPercentage,
      dateOfBirth: item.dateOfBirth,
      hobbies: item.hobbies || [],
      profilePicture: photoUrl,
    };
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

// The main ProfilePage component (Server Component)
export default async function ProfilePage({ params }) {
  // Now, params will contain 'documentId'
  const docId = params.documentId;
  const profile = await getProfile(docId); // Pass documentId to the fetch function

  console.log("profile page recieved params.documentId", docId);

  if (!profile) {
    notFound(); // Next.js built-in 404
  }

  // Helper function to render aboutMe content (basic version)
  const renderAboutMe = (content) => {
    if (!content) {
      return (
        <Typography variant="body2" color="text.secondary">
          No "About Me" information provided yet.
        </Typography>
      );
    }
    if (Array.isArray(content)) {
      const plainText = content.map(node => {
        if (node.children && Array.isArray(node.children)) {
          return node.children.map(child => child.text || '').join('');
        }
        return '';
      }).join('\n');
      return (
        <Typography variant="body2" color="text.secondary">
          {plainText || 'About Me content (rich text) provided but requires a dedicated renderer for full formatting.'}
        </Typography>
      );
    } else if (typeof content === 'string') {
      return (
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      );
    }
    return (
      <Typography variant="body2" color="text.secondary">
        Invalid "About Me" content format.
      </Typography>
    );
  };

  return (
    <Box sx={{ flexGrow: 1, p: 4, maxWidth: 1000, mx: 'auto', mt: 4 }}>
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
        <Grid container spacing={4}>
          {/* Left Column: Profile Picture and Basic Info */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              alt={profile.fullName}
              src={profile.profilePicture}
              sx={{ width: 200, height: 200, mx: 'auto', mb: 2, border: '2px solid #ccc' }}
            />
            <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              {profile.fullName}, {profile.age}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {profile.profession}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profile.city}, {profile.state}, {profile.country}
            </Typography>
            <Box sx={{ mt: 2 }}>
                <Chip label={profile.maritalStatus} variant="outlined" sx={{ mr: 1, mb: 1 }} />
                <Chip label={profile.religion} variant="outlined" sx={{ mr: 1, mb: 1 }} />
                <Chip label={profile.caste} variant="outlined" sx={{ mr: 1, mb: 1 }} />
            </Box>
          </Grid>

          {/* Right Column: Detailed Information */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Me
            </Typography>
            {renderAboutMe(profile.aboutMe)}

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
              Personal Details
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={6}><Typography variant="body2">Gender: **{profile.gender}**</Typography></Grid>
                <Grid item xs={6}><Typography variant="body2">Height: **{profile.height}**</Typography></Grid>
                <Grid item xs={6}><Typography variant="body2">Mother Tongue: **{profile.motherTongue}**</Typography></Grid>
                <Grid item xs={6}><Typography variant="body2">Diet: **{profile.diet}**</Typography></Grid>
                <Grid item xs={6}><Typography variant="body2">Smoking Habits: **{profile.smokingHabits}**</Typography></Grid>
                <Grid item xs={6}><Typography variant="body2">Drinking Habits: **{profile.drinkingHabits}**</Typography></Grid>
                <Grid item xs={6}><Typography variant="body2">Education: **{profile.educationLevel}**</Typography></Grid>
                <Grid item xs={6}><Typography variant="body2">Income: **{profile.income}**</Typography></Grid>
            </Grid>

            {/* Hobbies Section */}
            {profile.hobbies && profile.hobbies.length > 0 && (
                <>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    Hobbies
                    </Typography>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                        {profile.hobbies.map((hobby, index) => (
                            <Chip key={index} label={hobby} size="small" color="secondary" variant="filled" />
                        ))}
                    </Stack>
                </>
            )}

            {/* Partner Preferences Section */}
            {profile.partnerPreferences && (
                <>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                        Partner Preferences
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6}><Typography variant="body2">Age Range: **{profile.partnerPreferences.ageRange}**</Typography></Grid>
                        <Grid item xs={6}><Typography variant="body2">Location: **{profile.partnerPreferences.location}**</Typography></Grid>
                        <Grid item xs={6}><Typography variant="body2">Religion: **{profile.partnerPreferences.religion}**</Typography></Grid>
                    </Grid>
                </>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}