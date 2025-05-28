import React, { useEffect } from "react";
import NetflixCloneOverviewContainer from "../containers/ProjectOverview_netflix-clone";
import { Grid, Box, Button } from "@mui/material";
import useStyles from "../styles/project.js";
import { useGlobalContext } from "../context/AppContext";
import MenuIcon from '@mui/icons-material/Menu';
import { FaGithub } from 'react-icons/fa';



export default function NetflixCloneOverview({DarkMode}){
      const classes = useStyles({ DarkMode });
      const { setIsNavOpen } = useGlobalContext();
  useEffect(() => {
    document.title = 'Netflix Clone | Daniel Idoko | Website Developer & Ethical Hacking';
  }, []);

    return(
      <Box
        sx={{
          maxWidth: 960,
          mx: 'auto',
          p: 3,
          color: DarkMode ? '#ccc' : '#333',
        }}
      >     <div className={classes.label} onClick={()=> setIsNavOpen(true)}>
                <MenuIcon className={classes.menuIcon}/>
                <h5 className={classes.name} style={{margin: '0'}}>Daniel Idoko</h5>
            </div>

            <NetflixCloneOverviewContainer DarkMode={DarkMode} />  



            {/* Action Buttons */}
            <Grid container spacing={2} className={classes.specialResponsiveCenter}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://github.com/doe-base/Netflix-clone"
                  startIcon={<FaGithub />}
                  target="_blank"
                  rel="noopener"
                >
                  View Code
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  href="https://netflix-clone-self-iota.vercel.app"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: DarkMode ? '#90caf9' : 'primary.main',
                    borderColor: DarkMode ? '#90caf9' : 'primary.main',
                    '&:hover': {
                      borderColor: DarkMode ? '#64b5f6' : 'primary.dark',
                    },
                  }}
                >
                  Live Demo
                </Button>
              </Grid>
            </Grid>
      </Box>
    )
};