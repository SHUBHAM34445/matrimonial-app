// // export default function HomePage() {
// //   return (
// //     <div>
// //       <h1>Welcome to the Matrimonial Website</h1>
// //     </div>
// //   );
// // }




// // In src/app/page.js or any other component that uses MUI components
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// // This component can be a Server Component (default) or Client Component
// export default function HomePage() {
//   return (
//     <Box
//       sx={{
//         p: { xs: 2, sm: 4, md: 6 }, // Responsive padding using theme spacing
//         textAlign: 'center',
//         backgroundColor: 'primary.main', // Accessing theme colors
//         color: 'white',
//       }}
//     >
//       <Typography variant="h3" component="h1" gutterBottom>
//         Welcome to Your Matrimony Site!
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Find your perfect partner today.
//       </Typography>
//       <Button variant="contained" color="secondary" sx={{ mt: 2 }}> {/* mt for margin-top */}
//         Get Started
//       </Button>
//     </Box>
//   );
// }




// src/app/page.js
// This can remain a Server Component or be made client if highly interactive
// For now, let's keep it simple as a Server Component for initial load
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'; // For navigation
import HeroVideoBanner from '@/components/HeroVideoBanner';
import TestimonialSection from '@/components/TestimonialSection';

import WhoWeAre from '../components/WhoWeAre';
import SafetyPrivacy from '../components/SafetyPrivacy';
import ContactSupport from '../components/ContactSupport';
import AppDownloadSection from '../components/AppDownloadSection';
import SearchBoxSection from '../components/SearchBoxSection'; // Uncomment if you want to include the search box section
import FeaturedProfiles from '../components/FeaturedProfiles';
import SuccessStories from '../components/SuccessStories';
import WhyChooseUs from '@/components/WhyChooseUs';


export default function HomePage() {
  return (
    <>
      
      <HeroVideoBanner />
      
      <FeaturedProfiles />
      <TestimonialSection />
      <WhoWeAre />
      <WhyChooseUs  />
      <SuccessStories />
      <SafetyPrivacy />
      <ContactSupport />
      <AppDownloadSection />
      {/* <SearchBoxSection /> */}
      
    {/* <Box sx={{ p: 4, textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Find Your Life Partner Today!
      </Typography>
      <Typography variant="h6" component="p" paragraph sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
        Connect with thousands of verified profiles and embark on your journey to a happy marriage.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link href="/register" passHref >
          <Button variant="contained" color="primary" size="large">
            Join Free
          </Button>
        </Link>
        <Link href="/search" passHref >
          <Button variant="outlined" color="primary" size="large">
            Browse Profiles
          </Button>
        </Link>
      </Box>
    </Box> */}
    </>
  );
}