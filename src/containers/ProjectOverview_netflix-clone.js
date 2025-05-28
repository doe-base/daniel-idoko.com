import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Grid,
  Card,
  CardMedia,
  useTheme,
  CardContent,
} from '@mui/material';
import ProjectImageSlider from '../components/image-slider/ResponsiveSlider';


const techStack = ['Firebase', 'React'];


export default function NetflixCloneOverviewContainer({DarkMode}){
    const theme = useTheme();
    const isDark = DarkMode;

    const images = [
      '/img/netflix-clone/netflix-clone-1.png',
      '/img/netflix-clone/netflix-clone-2.png',
      '/img/netflix-clone/netflix-clone-3.png',
      '/img/netflix-clone/netflix-clone-4.png',
      '/img/netflix-clone/netflix-clone-5.png',
      '/img/netflix-clone/netflix-clone-6.png'
    ];

    return(

      <>
      {/* Title */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
          Netflix Clone
        </Typography>

        {/* Hero Image */}
        <div>
          <ProjectImageSlider images={images} darkMode={isDark} />
        </div>

        {/* Description */}
        <Typography variant="body1" sx={{ mb: 3, color: isDark ? '#aaa' : 'text.secondary' }}>
            This project is a Netflix Clone web application built using React for the front-end and Firebase for backend services such as Authentication and Database. It mimics the core functionality of Netflix, allowing users to browse movies, sign up, log in.
        </Typography>

        {/* Tech Stack */}
        <Typography variant="h6" gutterBottom>
          Tech Stack
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {techStack.map((tech) => (
            <Chip
              label={tech}
              key={tech}
              color="primary"
              variant={isDark ? 'outlined' : 'filled'}
            />
          ))}
        </Box>

        {/* Key Features */}
        <Typography variant="h6" gutterBottom>
          Key Features
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', marginBottom: '2rem', color: isDark ? '#bbb' : '#555' }}>
          <li><strong>User Authentication</strong>: Secure sign-up and login using Firebase Authentication (email and password).</li>
          <li><strong>Movie Listings</strong>: Display movies fetched from a movie API.</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          What I Learned
        </Typography>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', color: isDark ? '#aaa' : '#555' }}>
          <li><strong>Integrating Firebase Authentication</strong>: Gained hands-on experience setting up secure user sign-up and login flows using Firebase.</li>
          <li><strong>State Management in React</strong>: Managed user authentication state and UI conditionally using React Hooks.</li>
          <li><strong>Working with APIs</strong>: Fetched and rendered dynamic movie data from a third-party API.</li>
          <li><strong>Component Reusability</strong>: Built modular and reusable components for a cleaner, maintainable codebase.</li>
          <li><strong>Styled Components</strong>: Learned how to style React components using CSS-in-JS with Styled Components.</li>
          <li><strong>Firebase Firestore Integration</strong>: Connected the app to Firestore to prepare for storing user data like watchlists and preferences.</li>
          <li><strong>Responsive Design</strong>: Designed layouts that adapt well across desktop and mobile screens.</li>
        </ul>

      </>        
    )
};
// It demonstrates advanced modularization and problem-solving