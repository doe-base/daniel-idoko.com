import React, { useEffect } from "react";
import BankApplicationOverviewContainer from "../containers/ProjectOverview_bank-application";
import { Grid, Box, Button } from "@mui/material";
import useStyles from "../styles/project.js";
import { useGlobalContext } from "../context/AppContext";
import MenuIcon from '@mui/icons-material/Menu';
import { FaGithub } from 'react-icons/fa';



export default function BankApplicationOverview({DarkMode}){
      const classes = useStyles({ DarkMode });
      const { setIsNavOpen } = useGlobalContext();
  useEffect(() => {
    document.title = 'Bank Application | Daniel Idoko | Website Developer & Ethical Hacking';
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

            <BankApplicationOverviewContainer DarkMode={DarkMode} />  



            {/* Action Buttons */}
            <Grid container spacing={2} className={classes.specialResponsiveCenter}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://github.com/doe-base/bank-application"
                  startIcon={<FaGithub />}
                  target="_blank"
                  rel="noopener"
                >
                  View Code
                </Button>
              </Grid>
            </Grid>
      </Box>
    )
};