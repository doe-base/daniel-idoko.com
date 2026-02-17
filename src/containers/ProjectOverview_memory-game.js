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


const techStack = ['JavaScript', 'Node.js', 'Socket.io', 'HTML5', 'CSS3'];


export default function MemoryGameOverviewContainer({DarkMode}){
    const theme = useTheme();
    const isDark = DarkMode;

    const images = [
      '/img/memory-game/memory-game-1.png',
      '/img/memory-game/memory-game-2.png',
      '/img/memory-game/memory-game-3.png',
      '/img/memory-game/memory-game-4.png'
    ];

    return(

      <>
      {/* Title */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
          Memory Game V2
        </Typography>

        {/* Hero Image */}
        <div>
          <ProjectImageSlider images={images} darkMode={isDark} />
        </div>

        {/* Description */}
        <Typography variant="body1" sx={{ mb: 3, color: isDark ? '#aaa' : 'text.secondary' }}>
          The Memory Game V2 is an enhanced version of the classic card-matching game built using
          vanilla JavaScript. This update introduces new features, improved gameplay mechanics, and
          a refined user experience, and now includes a competitive multiplayer mode.
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
          <li>🎮 Classic card-matching mechanics with smooth transitions</li>
          <li>👥 Multiplayer mode for added competitiveness</li>
          <li>📦 Modular and maintainable JavaScript architecture</li>
          <li>✨ Custom UI and animations with vanilla CSS</li>
          <li>🧠 Tracks attempts, time, and player progress</li>
        </ul>

        <Typography variant="h6" gutterBottom>
          What I Learned
        </Typography>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', color: isDark ? '#aaa' : '#555' }}>
          <li>Structured modular JavaScript code for better reusability and clarity</li>
          <li>Improved problem-solving and debugging skills during complex logic development</li>
          <li>Handled DOM manipulation efficiently without external libraries</li>
          <li>Implemented multiplayer mode with careful game state management</li>
          <li>Designed a more refined and responsive user interface</li>
          <li>Optimized performance and addressed user experience edge cases</li>
        </ul>

      </>        
    )
};
// It demonstrates advanced modularization and problem-solving