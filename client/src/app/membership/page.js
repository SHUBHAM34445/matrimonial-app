// // src/app/(main)/membership/page.js
// "use client"; // This is a Client Component
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { useTheme } from '@mui/material/styles'; // To access theme for highlighting

// export default function MembershipPage() {
//   const theme = useTheme();

//   // Mock membership plans
//   const plans = [
//     {
//       id: 'free',
//       name: 'Free Member',
//       price: '₹0',
//       duration: 'Lifetime',
//       features: [
//         'Basic Profile Creation',
//         'Limited Profile Views',
//         'Send 5 Interests/Day',
//         'Receive Interests',
//       ],
//       isCurrent: true, // Example: Mark the current user's plan
//     },
//     {
//       id: 'silver',
//       name: 'Silver Plan',
//       price: '₹1,999',
//       duration: '3 Months',
//       features: [
//         'All Free Features',
//         'Unlimited Profile Views',
//         'Send 25 Interests/Day',
//         'View 5 Contact Details',
//         'Basic Chat Access',
//       ],
//       isCurrent: false,
//     },
//     {
//       id: 'gold',
//       name: 'Gold Plan',
//       price: '₹3,999',
//       duration: '6 Months',
//       features: [
//         'All Silver Features',
//         'Unlimited Interests',
//         'View Unlimited Contact Details',
//         'Full Chat Access',
//         'Profile Highlight',
//         'Dedicated Support',
//       ],
//       isCurrent: false,
//       recommended: true,
//     },
//   ];

//   const handleUpgrade = (planId) => {
//     console.log(`Attempting to upgrade to ${planId}`);
//     // TODO: Implement payment gateway integration and update user's membership in Strapi
//     alert(`Initiating payment for ${planId} plan.`);
//   };

//   return (
//     <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto', mt: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
//         Choose Your Membership Plan
//       </Typography>

//       <Grid container spacing={4} alignItems="stretch">
//         {plans.map((plan) => (
//           <Grid item xs={12} md={4} key={plan.id}>
//             <Card
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 height: '100%',
//                 border: plan.recommended ? `2px solid ${theme.palette.primary.main}` : '1px solid #e0e0e0',
//                 boxShadow: plan.recommended ? 6 : 1,
//                 position: 'relative',
//               }}
//             >
//               {plan.recommended && (
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0,
//                     backgroundColor: theme.palette.primary.main,
//                     color: 'white',
//                     px: 1.5,
//                     py: 0.5,
//                     borderBottomLeftRadius: 8,
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   Recommended
//                 </Box>
//               )}
//               <CardContent sx={{ flexGrow: 1, pb: 0 }}>
//                 <Typography variant="h5" component="h2" gutterBottom>
//                   {plan.name}
//                 </Typography>
//                 <Typography variant="h4" component="p" sx={{ mb: 1, fontWeight: 'bold' }}>
//                   {plan.price}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                   Per {plan.duration}
//                 </Typography>
//                 <List dense>
//                   {plan.features.map((feature, index) => (
//                     <ListItem key={index} disablePadding>
//                       <ListItemIcon sx={{ minWidth: 32 }}>
//                         <CheckCircleIcon color="success" fontSize="small" />
//                       </ListItemIcon>
//                       <ListItemText primary={feature} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </CardContent>
//               <CardActions sx={{ p: 2, pt: 0, justifyContent: 'center' }}>
//                 {plan.isCurrent ? (
//                   <Button variant="outlined" disabled fullWidth>
//                     Current Plan
//                   </Button>
//                 ) : (
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleUpgrade(plan.id)}
//                     fullWidth
//                   >
//                     Upgrade Now
//                   </Button>
//                 )}
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       {/* TODO: Add sections for payment history, managing auto-renewal */}
//     </Box>
//   );
// }






"use client"; // This is a Client Component

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

export default function MembershipPage() {
  const theme = useTheme();

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembershipPlans = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/membership-plans');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Corrected mapping: Access attributes directly from the item object
        const fetchedPlans = data.data.map(item => ({
          id: item.id,
          name: item.name, // Corrected: item.name instead of item.attributes.name
          price: `₹${item.price.toLocaleString('en-IN')}`, // Corrected: item.price
          duration: `${item.durationInMonths} Months`, // Corrected: item.durationInMonths
          features: item.features, // Corrected: item.features
          isCurrent: false, // This will be determined dynamically later based on user's actual plan
          recommended: item.isPopular, // Corrected: item.isPopular
        }));

        // Optional: Add a "Free Member" plan if it's not in Strapi
        const freePlanExists = fetchedPlans.some(plan => plan.id === 'free' || plan.name === 'Free Member');
        if (!freePlanExists) {
            fetchedPlans.unshift({ // Add to the beginning of the array
                id: 'free', // Use a static ID for the free plan
                name: 'Free Member',
                price: '₹0',
                duration: 'Lifetime',
                features: [
                    'Basic Profile Creation',
                    'Limited Profile Views',
                    'Send 5 Interests/Day',
                    'Receive Interests',
                ],
                isCurrent: true, // Assuming default current plan is Free
                recommended: false,
            });
        }
        
        setPlans(fetchedPlans);
      } catch (err) {
        console.error("Failed to fetch membership plans:", err);
        setError("Failed to load membership plans. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMembershipPlans();
  }, []); // Empty dependency array means this runs once on component mount

  const handleUpgrade = (planId) => {
    console.log(`Attempting to upgrade to ${planId}`);
    // TODO: Implement payment gateway integration and update user's membership in Strapi
    alert(`Initiating payment for plan ID: ${planId}.`);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>Loading plans...</Typography>
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

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Choose Your Membership Plan
      </Typography>

      <Grid container spacing={4} alignItems="stretch">
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                border: plan.recommended ? `2px solid ${theme.palette.primary.main}` : '1px solid #e0e0e0',
                boxShadow: plan.recommended ? 6 : 1,
                position: 'relative',
              }}
            >
              {plan.recommended && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderBottomLeftRadius: 8,
                    fontWeight: 'bold',
                  }}
                >
                  Recommended
                </Box>
              )}
              <CardContent sx={{ flexGrow: 1, pb: 0 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {plan.name}
                </Typography>
                <Typography variant="h4" component="p" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {plan.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Per {plan.duration}
                </Typography>
                <List dense>
                  {Array.isArray(plan.features) && plan.features.map((feature, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0, justifyContent: 'center' }}>
                {plan.isCurrent ? (
                  <Button variant="outlined" disabled fullWidth>
                    Current Plan
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpgrade(plan.id)}
                    fullWidth
                  >
                    Upgrade Now
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* TODO: Add sections for payment history, managing auto-renewal */}
    </Box>
  );
}