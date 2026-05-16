
// // // // // File: src/components/Navbar.js
// // // // "use client";

// // // // import React from 'react';
// // // // import Link from 'next/link';
// // // // import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Button } from '@mui/material';
// // // // import MenuIcon from '@mui/icons-material/Menu';

// // // // const pages = [
// // // //   { label: 'Explore', href: '/explore' },
// // // //   { label: 'All Pages', href: '/all-pages' },
// // // //   { label: 'Top Pages', href: '/top-pages' },
// // // //   { label: 'Plans', href: '/membership' },
// // // //   { label: 'Register', href: '/register' },
// // // //   { label: 'Dashboard', href: '/dashboard' },
// // // // ];

// // // // export default function Navbar() {
// // // //   const [anchorEl, setAnchorEl] = React.useState(null);
// // // //   const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
// // // //   const handleCloseMenu = () => setAnchorEl(null);

// // // //   return (
// // // //     <AppBar position="fixed" color="default" elevation={4}>
// // // //       <Toolbar>
// // // //         <IconButton edge="start" color="inherit" onClick={handleOpenMenu} sx={{ display: { sm: 'none' } }}>
// // // //           <MenuIcon />
// // // //         </IconButton>

// // // //         <Typography variant="h6" sx={{ flexGrow: 1, ml: 2 }}>
// // // //           <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>ShubhVivah.com</Link>
// // // //         </Typography>

// // // //         <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
// // // //           {pages.map((page) => (
// // // //             <Button key={page.href} href={page.href} color="inherit">
// // // //               {page.label}
// // // //             </Button>
// // // //           ))}
// // // //         </Box>

// // // //         <Menu
// // // //           anchorEl={anchorEl}
// // // //           open={Boolean(anchorEl)}
// // // //           onClose={handleCloseMenu}
// // // //           sx={{ display: { sm: 'none' } }}
// // // //         >
// // // //           {pages.map((page) => (
// // // //             <MenuItem key={page.href} onClick={handleCloseMenu} component={Link} href={page.href}>
// // // //               {page.label}
// // // //             </MenuItem>
// // // //           ))}
// // // //         </Menu>
// // // //       </Toolbar>
// // // //     </AppBar>
// // // //   );
// // // // }



// // // // File: src/components/Navbar.js
// // // 'use client';

// // // import React from 'react';
// // // import Link from 'next/link';
// // // import styles from '../components/scss/Navbar.module.scss'; // Adjust the path as necessary

// // // export default function Navbar() {
// // //   return (
// // //     <header className={styles.header}>
// // //       <div className={styles.topBar}>
// // //         <div className={styles.topLinks}>
// // //           <Link href="#">ABOUT</Link>
// // //           <Link href="#">FAQ</Link>
// // //           <Link href="#">CONTACT</Link>
// // //         </div>
// // //         <div className={styles.topContact}>
// // //           <span>+01 5312 5312</span>
// // //           <span>HELP@COMPANY.COM</span>
// // //         </div>
// // //       </div>

// // //       <nav className={styles.navbar}>
// // //         <div className={styles.logoSection}>
// // //           <button className={styles.menuToggle}>☰</button>
// // //           <Link href="/" className={styles.logo}>WEDDING <span>MATRIMONY</span></Link>
// // //         </div>

// // //         <ul className={styles.navLinks}>
// // //           <li className={styles.dropdown}>
// // //             <a href="#">Explore ▾</a>
// // //             <ul className={styles.dropdownMenu}>
// // //               <li><Link href="/browse">Browse Profiles</Link></li>
// // //               <li><Link href="/services">Our Services</Link></li>
// // //               <li><Link href="/join">Join Now</Link></li>
// // //             </ul>
// // //           </li>
// // //           <li><Link href="/all-pages">All Pages</Link></li>
// // //           <li><Link href="/top-pages">Top Pages</Link></li>
// // //           <li><Link href="/membership">Plans</Link></li>
// // //           <li><Link href="/register">Register</Link></li>
// // //           <li><Link href="/dashboard">Dashboard</Link></li>
// // //         </ul>

// // //         <div className={styles.advisor}>
// // //           <img src="https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Advisor" />
// // //           <span>Ashley emyy</span>
// // //         </div>
// // //       </nav>
// // //     </header>
// // //   );
// // // }






// // 'use client';

// // import React from 'react';
// // import styles from '../components/scss/Navbar.module.scss'; // Adjust the path as necessary

// // const menuData = [
// //   {
// //     title: 'animals',
// //     className: '',
// //     items: ['cat', 'dog', 'horse', 'cow', 'pig'],
// //   },
// //   {
// //     title: 'names',
// //     className: 'menu-title_2nd',
// //     items: ['Kevin', 'Jim', 'Andy'],
// //   },
// //   {
// //     title: 'things',
// //     className: 'menu-title_3rd',
// //     items: ['bench', 'pizza', 'Honda CB125', 'space', 'black matter', 'apple', 'philodendron', 'liver', 'brass'],
// //   },
// //   {
// //     title: 'Movies',
// //     className: 'menu-title_4th',
// //     items: ['Godzilla', 'Man on Wire', 'Spirited Away', 'Interstellar'],
// //   },
// // ];

// // export default function MenuList() {
// //   return (
// //     <ul className={styles.hList}>
// //       {menuData.map((menu, index) => (
// //         <li key={index}>
// //           <a href="#click" className={styles.menu}>
// //             <h2 className={`${styles['menu-title']} ${styles[menu.className]}`}>
// //               {menu.title}
// //             </h2>
// //             <ul className={styles['menu-dropdown']}>
// //               {menu.items.map((item, idx) => (
// //                 <li key={idx}>{item}</li>
// //               ))}
// //             </ul>
// //           </a>
// //         </li>
// //       ))}
// //     </ul>
// //   );
// // }




// 'use client';

// import React from 'react';
// import styles from '../components/scss/Navbar.module.scss'; // Adjust the path as necessary
// // import Box from '@mui/material/Box';

// const menuData = [
//   {
//     title: 'Explore',
//     className: '',
//     items: ['Browse Profiles', 'Our Services', 'Join Now'],
//   },
//   {
//     title: 'PLANS',
//     className: 'menu-title_2nd',
//     items: ['Kevin', 'Jim', 'Andy'],
//   },
//   {
//     title: 'ABOUT',
//     className: 'menu-title_3rd',
//     items: ['bench', 'pizza', 'Honda CB125', 'space', 'black matter', 'apple', 'philodendron', 'liver', 'brass'],
//   },
//   {
//     title: 'CONTACT US',
//     className: 'menu-title_4th',
//     items: ['Godzilla', 'Man on Wire', 'Spirited Away', 'Interstellar'],
//   },
// ];

// // export default function MenuList() {
// //   return (
// //     <>
// //     <div style={{display:"flex", justifyContent: 'center'}}>
// //     <ul className={styles.hList}>
// //       {menuData.map((menu, index) => (
// //         <li key={index} className={styles.menu}>
// //           <div className={`${styles['menu-title']} ${styles[menu.className]}`}>
// //             {menu.title}
// //           </div>
// //           <ul className={styles['menu-dropdown']}>
// //             {menu.items.map((item, idx) => (
// //               <li key={idx}>{item}</li>
// //             ))}
// //           </ul>
// //         </li>
// //       ))}
// //     </ul>
// //     </div>
// //     </>
// //   );
// // }


// export default function MenuList() {
//   return (
//     <>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '70px', // Adjust height as needed
//           zIndex: 1000, // ensure it stays on top
//           backgroundColor: '#fff', // or match your navbar background
//         }}
//       >
//         <ul className={styles.hList}>
//           {menuData.map((menu, index) => (
//             <li key={index} className={styles.menu}>
//               <div className={`${styles['menu-title']} ${styles[menu.className]}`}>
//                 {menu.title}

//               </div>

//               <ul className={styles['menu-dropdown']}>
//                 {menu.items.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//               {/* <div className='menu-title'>
//               All Pages
//               </div> */}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }










import React from 'react'; // React is implicitly available in Next.js, but good practice to import for clarity
import style from '../components/scss/Navbar.css'; // Adjust the path as necessary
import Box from '@mui/material/Box'; // Import Box from Material-UI for layout
import { Avatar } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <meta charSet="UTF-8" /> {/* Use charSet instead of charset in JSX */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>

      {/* Font Awesome Kit Script */}
      <script src="https://kit.fontawesome.com/628c8d2499.js" crossOrigin="anonymous"></script>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />


      <nav id="menu">
        <a href="/" className="logo">
          <img style={{ width: '250px' }} src="http://localhost:1337/uploads/shubhvivah_1920_x_512_px_d5f701e52c.png" alt="Logo" />
          {/* <span>Fjolt</span> */}
        </a>
        <Box sx={{display: 'flex'}}>
          <div className="menu-item">
            <div className="menu-text">
              <a href="/explore">Explore</a> {/* Updated href */}
            </div>
            <div className="sub-menu">
              <div className="icon-box">
                <div className="icon"><i className="fal fa-wind-turbine"></i></div>
                <div className="text">
                  <div className="title">Turbo Editor <i className="far fa-arrow-right"></i></div>
                  <div className="sub-text">Edit your code while slowing down time.</div>
                </div>
              </div>
              <div className="icon-box">
                <div className="icon"><i className="fal fa-lightbulb-on"></i></div>
                <div className="text">
                  <div className="title">Idea Creator <i className="far fa-arrow-right"></i></div>
                  <div className="sub-text">Think of an idea, and have an AI create it.</div>
                </div>
              </div>
              <div className="icon-box">
                <div className="icon"><i className="fal fa-bomb"></i></div>
                <div className="text">
                  <div className="title">Super Collider <i className="far fa-arrow-right"></i></div>
                  <div className="sub-text">Remove mass from any object.</div>
                </div>
              </div>
              <div className="sub-menu-holder"></div>
            </div>
          </div>
          <div className="menu-item highlight">
            <div className="menu-text">
              <a href="/services">Services</a> {/* Updated href */}
            </div>
            <div className="sub-menu double">
              <div className="icon-box gb a">
                <div className="icon"><i className="far fa-question-circle"></i></div>
                <div className="text">
                  <div className="title">Consult <i className="far fa-arrow-right"></i></div>
                  <div className="sub-text">From Professionals</div>
                </div>
              </div>
              <div className="icon-box gb b">
                <div className="icon"><i className="far fa-users-class"></i></div>
                <div className="text">
                  {/* Updated href for Membership */}
                  <div className="title"><a href="../membership">Membership<i className="far fa-arrow-right"></i></a></div>
                  <div className="sub-text">In Classroom</div>
                </div>
              </div>
              <div className="icon-box gb c">
                <div className="icon"><i className="far fa-school"></i></div>
                <div className="text">
                  <div className="title">Learn <i className="far fa-arrow-right"></i></div>
                  <div className="sub-text">By Video</div>
                </div>
              </div>
              <div className="icon-box gb d">
                <div className="icon"><i className="far fa-chess-rook"></i></div>
                <div className="text">
                  <div className="title">Keep <i className="far fa-arrow-right"></i></div>
                  <div className="sub-text">The Castle</div>
                </div>
              </div>
              <div className="icon-box gb e">
                <div className="icon"><i className="far fa-video-plus"></i></div>
                <div className="text">
                  <div className="title">Become <i className="far fa-arrow-right"></i></div>
                  <div className="sub-text">A Creator</div>
                </div>
              </div>
              <div className="icon-box gb f">
                <div className="icon"><i className="far fa-cat"></i></div>
                <div className="text">
                  <div className="title">Understand <i className="far fa-arrow-right"></i></div>
                  <div className="sub-text">Our Journey</div>
                </div>
              </div>
              <div className="bottom-container">
                Ready to dive in? <a href="/get-started">Get Started</a> {/* Updated href */}
              </div>
              <div className="sub-menu-holder"></div>
            </div>
          </div>
          <div className="menu-item highlight">
            <div className="menu-text">
              <a href="/support">Support</a> {/* Updated href */}
            </div>

          </div>
          <div className="menu-item">
            <div className="menu-text">
              <a href="/dashboard">Dashboard</a> {/* Updated href */}
            </div>
            <div className="sub-menu">
              <div className="icon-box">
                <div className="icon"><i className="far fa-satellite"></i></div>
                <div className="text">
                  <div className="title"><a href='../dashboard'>Admin Dashboard</a> <i className="far fa-arrow-right"></i></div>
                </div>
              </div>
              <div className="icon-box">
                <div className="icon"><i className="fab fa-twitter-square"></i></div>
                <div className="text">
                  <div className="title">User Dashboard <i className="far fa-arrow-right"></i></div>
                </div>
              </div>

              <div className="sub-menu-holder"></div>
            </div>
          </div>
          <div id="sub-menu-container">
            <div id="sub-menu-holder">
              <div id="sub-menu-bottom"></div>
            </div>
          </div>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?ga=GA1.1.1597830310.1734608040&semt=ais_hybrid&w=740" />
        </Box>
      </nav>

      {/* Info Box section */}
      {/* <div id="info-box">
        <ul>
          <li><a target="_top" href="https://twitter.com/thisisfjolt">Follow on Twitter</a></li>
          <li><a target="_top" href="https://fjolt.com/article/css-only-stripe-menu-with-clip">Read Article</a></li>
          <li><a target="_top" href="https://github.com/smpnjn/stripe-like-menu">GitHub Repo</a></li>
        </ul>
      </div> */}
    </>
  );
};

export default Navbar; // Export the component for Next.js to render
