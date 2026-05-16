// // // src/components/home/SuccessStories.js
// // "use client";
// // import Box from '@mui/material/Box';
// // import Typography from '@mui/material/Typography';
// // import Grid from '@mui/material/Grid';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import Avatar from '@mui/material/Avatar';
// // import Image from 'next/image';
// // import { useState } from 'react';

// // export default function SuccessStories() {
  
// //   const [stories, setStories] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Fetch success stories from Strapi CMS
// //   useEffect(() => {
// //     const fetchStories = async () => {
// //       try {
// //         const response = await fetch('https://your-strapi-api-url.com/stories'); // Replace with your Strapi API URL
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch stories');
// //         }

// //         const data = await response.json();

// //         const formattedStories = data.map((story) => ({
// //           id: story.id,
// //           coupleName: story.coupleName,
// //           couplePhoto: story.couplePhoto.url, // Adjust based on your Strapi response structure
// //           storyContent: story.storyContent, // Adjust based on your Strapi response structure
// //           weddingDate: `Married: ${new Date(story.weddingDate).toLocaleDateString()}`, // Format date as needed
// //         }));

// //         setStories(formattedStories);
// //         setLoading(false);

// //       }
// //       catch (err) {
// //         console.error('Error fetching stories:', err);
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };
// //     fetchStories();
// //   }
// //   , []);


// //   return (
// //     <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#ffffff', textAlign: 'center' }}>
// //       <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
// //         Our Success Stories
// //       </Typography>
// //       <Grid container spacing={4} justifyContent="center">
// //        {stories.length === 0 && loading && (
// //         <Typography variant="body1" color="text.secondary">
// //           Loading stories...
// //           </Typography>
// //           )}
// //         {stories.length === 0 && !loading && error && (
// //           <Typography variant="body1" color="error">
// //             Error fetching stories: {error}
// //           </Typography>
// //         )}
// //         {stories.map((story) => (
// //           <Grid item xs={12} sm={6} md={4} key={story.id}>
// //             <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2 }}>
// //               <Image
// //                 src={story.couplePhoto}
// //                 alt={story.coupleName}
// //                 width={400}
// //                 height={250}
// //                 layout="responsive"
// //                 style={{ objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
// //               />
// //               <CardContent sx={{ flexGrow: 1 }}>
// //                 <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
// //                   {story.coupleName}
// //                 </Typography>
// //                 <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
// //                   "{story.storyContent}"
// //                 </Typography>
// //                 <Typography variant="caption" color="text.disabled">
// //                   {story.weddingDate}
// //                 </Typography>
// //               </CardContent>
// //             </Card>
// //           </Grid>
// //         ))}
      
// //       </Grid>
// //     </Box>
// //   );
// // }



// "use client"; // This is a Client Component

// import { useState, useEffect } from 'react'; // Import useEffect here
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// // import Avatar from '@mui/material/Avatar'; // Removed: Not used in current component logic
// import Image from 'next/image';
// import CircularProgress from '@mui/material/CircularProgress'; // For loading indicator
// import Alert from '@mui/material/Alert'; // For error messages

// // Define your Strapi base URL (can also be an environment variable)
// const STRAPI_BASE_URL = 'http://localhost:1337'; // Or your deployed Strapi URL

// export default function SuccessStories() {
//   const [stories, setStories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchStories = async () => {
//       try {
//         // Correct Strapi API URL for Success Stories, including population for images
//         const response = await fetch(`${STRAPI_BASE_URL}/api/success-stories?populate=couplePhoto`);

//         if (!response.ok) {
//           throw new Error(`Failed to fetch stories: ${response.statusText}`);
//         }

//         const jsonResponse = await response.json();

//         // Map Strapi's nested data structure to your component's expected format
//         const formattedStories = jsonResponse.data.map((item) => {
//           // const attributes = item.attributes;
          
//           // Construct the full image URL
//           const imageUrl = couplePhoto && couplePhoto.data
//             ? `${STRAPI_BASE_URL}${couplePhoto.data.url}`
//             : '/path/to/default-image.jpg'; // Provide a fallback default image if no photo exists

//           return {
//             id: item.id,
//             coupleName: coupleName,
//             couplePhoto: imageUrl,
//             storyContent: storyContent,
//             weddingDate: `Married: ${new Date(weddingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, // Format date nicely
//           };
//         });

//         setStories(formattedStories);
//       } catch (err) {
//         console.error('Error fetching stories:', err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStories();
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#ffffff', textAlign: 'center' }}>
//       <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
//         Our Success Stories
//       </Typography>

//       {/* Loading Indicator */}
//       {loading && (
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
//           <CircularProgress />
//           <Typography variant="h6" sx={{ ml: 2 }}>Loading stories...</Typography>
//         </Box>
//       )}

//       {/* Error Message */}
//       {!loading && error && (
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
//           <Alert severity="error">Error fetching stories: {error}</Alert>
//         </Box>
//       )}

//       {/* No Stories Found */}
//       {!loading && !error && stories.length === 0 && (
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
//           <Typography variant="body1" color="text.secondary">
//             No success stories available at the moment.
//           </Typography>
//         </Box>
//       )}

//       {/* Display Stories */}
//       {!loading && !error && stories.length > 0 && (
//         <Grid container spacing={4} justifyContent="center">
//           {stories.map((story) => (
//             <Grid item xs={12} sm={6} md={4} key={story.id}>
//               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2 }}>
//                 {/* <Image
//                   src={story.couplePhoto}
//                   alt={story.coupleName}
//                   width={400} // Fixed width
//                   height={250} // Fixed height
//                   // layout="responsive" is deprecated. Width and height are enough for default responsiveness.
//                   style={{ objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
//                 /> */}
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
//                     {story.coupleName}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
//                     "{story.storyContent}"
//                   </Typography>
//                   <Typography variant="caption" color="text.disabled">
//                     {story.weddingDate}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Box>
//   );
// }

























"use client";

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
// import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// Define your Strapi base URL (can also be an environment variable)
const STRAPI_BASE_URL = 'http://localhost:1337';

export default function SuccessStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        // API call is correct: ?populate=couplePhoto is being used.
        const response = await fetch(`${STRAPI_BASE_URL}/api/success-stories?populate=couplePhoto`);

        if (!response.ok) {
          throw new Error(`Failed to fetch stories: ${response.statusText}`);
        }

        const jsonResponse = await response.json();

        const formattedStories = jsonResponse.data.map((item) => {
          // *** CRITICAL CHANGE HERE: couplePhoto.url instead of couplePhoto.data.attributes.url ***
          const imageUrl = item.couplePhoto && item.couplePhoto.url
            ? `${STRAPI_BASE_URL}${item.couplePhoto.url}`
            : '/placeholder-couple.jpg'; // Path to your default image in public folder

          return {
            id: item.id,
            coupleName: item.coupleName,
            couplePhoto: imageUrl,
            storyContent: item.storyContent, // Still the Lexical JSON object
            weddingDate: `Married: ${new Date(item.weddingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
          };
        });

        setStories(formattedStories);
      } catch (err) {
        console.error('Error fetching stories:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#ffffff', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
        Our Success Stories
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <CircularProgress />
          <Typography variant="h6" sx={{ ml: 2 }}>Loading stories...</Typography>
        </Box>
      )}

      {!loading && error && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <Alert severity="error">Error fetching stories: {error}</Alert>
        </Box>
      )}

      {!loading && !error && stories.length === 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <Typography variant="body1" color="text.secondary">
            No success stories available at the moment.
          </Typography>
        </Box>
      )}

      {!loading && !error && stories.length > 0 && (
        <Grid container spacing={4} justifyContent="center">
          {stories.map((story) => (
            <Grid item xs={12} sm={6} md={4} key={story.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2 }}>
                <img
                  src={story.couplePhoto}
                  alt={story.coupleName}
                  width={400}
                  height={250}
                  style={{ objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                  priority={true}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {story.coupleName}
                  </Typography>
                  {story.storyContent ? (
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2, '& p': { margin: 0 } }}>
                      <span content={story.storyContent} />
                    </Typography>
                  ) : (
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                      "No story content provided yet."
                    </Typography>
                  )}
                  <Typography variant="caption" color="text.disabled">
                    {story.weddingDate}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}