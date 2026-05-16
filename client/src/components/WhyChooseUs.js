// // src/components/home/WhyChooseUs.js
// "use client";
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import SecurityIcon from '@mui/icons-material/Security';
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// export default function WhyChooseUs() {
//   const features = [
//     {
//       icon: <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
//       title: 'Advanced Matchmaking',
//       description: 'Our intelligent algorithms connect you with highly compatible profiles based on your preferences.',
//     },
//     {
//       icon: <SecurityIcon sx={{ fontSize: 60, color: 'secondary.main' }} />,
//       title: '100% Privacy & Security',
//       description: 'Your data is safe with us. We ensure strict privacy controls and a secure platform for all members.',
//     },
//     {
//       icon: <VerifiedUserIcon sx={{ fontSize: 60, color: 'success.main' }} />,
//       title: 'Verified Profiles',
//       description: 'We strive for authenticity. Many profiles undergo verification to ensure genuine connections.',
//     },
//     {
//       icon: <ChatBubbleOutlineIcon sx={{ fontSize: 60, color: 'info.main' }} />,
//       title: 'Seamless Communication',
//       description: 'Connect with your matches instantly through our secure messaging and chat features.',
//     },
//     {
//       icon: <EmojiEventsIcon sx={{ fontSize: 60, color: 'warning.main' }} />,
//       title: 'Proven Success',
//       description: 'Join thousands who have found their life partners through our reliable matrimonial service.',
//     },
//   ];

//   return (
//     <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#f0f3f6', textAlign: 'center' }}>
//       <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: { xs: 4, md: 6 } }}>
//         Why Choose Us?
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {features.map((feature, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Paper sx={{ p: 4, height: '100%', boxShadow: 3, borderRadius: 2 }}>
//               <Box sx={{ mb: 2 }}>{feature.icon}</Box>
//               <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
//                 {feature.title}
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 {feature.description}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }





'use client';
import React from 'react';
import './scss/Navbar.css'; // SCSS optional

export default function WhyChooseUs() {
    return (
        <div className="why_choose">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="why_choose_head">
                            <h1>
                                W<span>HY CHOOS</span>E US?
                            </h1>
                        </div>
                    </div>
                </div>

                <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
                        <div className="text-down">
                            <img
                                src="https://images.unsplash.com/photo-1620327086389-d8b0c2357e94?auto=format&fit=crop&w=947&q=80"
                                alt="PN"
                            />
                            <div className="textbox">
                                <p className="details">Lorem ipsum dolor sit amet...</p>
                                <p className="view-more">
                                    <a href="#"><button className="btn-success btn btn-sm">View More</button></a>
                                </p>
                                <p className="text">Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
                        <div className="text-down">
                            <img
                                src="https://images.unsplash.com/photo-1498568715259-5c1dc96aa8e7?auto=format&fit=crop&w=1050&q=80"
                                alt="PN"
                            />
                            <div className="textbox">
                                <p className="details">Lorem ipsum dolor sit amet...</p>
                                <p className="view-more">
                                    <a href="#"><button className="btn-success btn btn-sm">View More</button></a>
                                </p>
                                <p className="text">Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
                        <div className="text-down">
                            <img
                                src="https://images.unsplash.com/photo-1619804751098-fdb088171d89?auto=format&fit=crop&w=925&q=80"
                                alt="PN"
                            />
                            <div className="textbox">
                                <p className="details">Lorem ipsum dolor sit amet...</p>
                                <p className="view-more">
                                    <a href="#"><button className="btn-success btn btn-sm">View More</button></a>
                                </p>
                                <p className="text">Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                    {/* --------------- */}

                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
                        <div className="text-down">
                            <img
                                src="https://images.unsplash.com/photo-1511102183964-65e900cd6a62?auto=format&fit=crop&w=1050&q=80"
                                alt="PN"
                            />
                            <div className="textbox">
                                <p className="details">Lorem ipsum dolor sit amet...</p>
                                <p className="view-more">
                                    <a href="#"><button className="btn-success btn btn-sm">View More</button></a>
                                </p>
                                <p className="text">Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
                        <div className="text-down">
                            <img
                                src="https://images.unsplash.com/photo-1509376642819-55dd03bd83a8?auto=format&fit=crop&w=1050&q=80"
                                alt="PN"
                            />
                            <div className="textbox">
                                <p className="details">Lorem ipsum dolor sit amet...</p>
                                <p className="view-more">
                                    <a href="#"><button className="btn-success btn btn-sm">View More</button></a>
                                </p>
                                <p className="text">Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 top">
                        <div className="text-down">
                            <img
                                src="https://images.unsplash.com/photo-1591035903277-22dbaf845677?auto=format&fit=crop&w=1051&q=80"
                                alt="PN"
                            />
                            <div className="textbox">
                                <p className="details">Lorem ipsum dolor sit amet...</p>
                                <p className="view-more">
                                    <a href="#"><button className="btn-success btn btn-sm">View More</button></a>
                                </p>
                                <p className="text">Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="row">
       
        </div> */}
            </div>
        </div>
    );
}
