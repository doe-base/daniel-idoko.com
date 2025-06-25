import React from "react";
// import { Grid } from "@mui/material";
import useStyles from "../styles/about";
import { FaGithubAlt } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from "../context/AppContext";
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Code, Security, Build, Devices } from '@mui/icons-material';

export default function  AboutContainer({DarkMode}){
    const classes = useStyles({ DarkMode });
    const { setIsNavOpen } = useGlobalContext();
    const backgroundColor = `${DarkMode ? "rgba(248, 249, 250, 0.2)" : "rgb(248, 249, 250)"}`;


    const services =[
      {
        icon: <Code fontSize="large" color="primary" />,
        title: "Website Development",
        desc: "I design and build fast, responsive, and accessible websites and web apps using React, Next.js, and Node.js.",
      },
      {
        icon: <Security fontSize="large" color="primary" />,
        title: "Ethical Hacking",
        desc: "I conduct vulnerability assessments and penetration testing to help businesses strengthen their digital security.",
      },
      {
        icon: <Build fontSize="large" color="primary" />,
        title: "Backend Development",
        desc: "I develop secure and scalable backend systems using Golang, Node.js, and Firebase for robust application performance.",
      },
      {
        icon: <Devices fontSize="large" color="primary" />,
        title: "Network Administrator",
        desc: "I set up, manage, and secure computer networks to ensure smooth operations and reliable connectivity across systems.",
      },
    ];

    return(
        <Grid container className={classes.root} style={{backgroundColor: backgroundColor}}>
            
            <Grid item xs={12} md={6} className={classes.test2}>
                <div className={classes.label} onClick={()=> setIsNavOpen(true)}>
                    <MenuIcon className={classes.menuIcon}/>
                    <h5 className={classes.name} style={{margin: '0'}}>Daniel Idoko</h5>
                </div>
            </Grid>

            <Grid item xs={12} md={6} className={classes.test}>
                <h1 className={classes.h1Title}>Daniel Idoko - Website Developer & Ethical Hacking</h1>

                <div className={classes.sparatorLine}></div>

                  <p className={classes.theParagraph} style={{marginBottom: '3rem'}}>I'm Daniel Idoko, a Website Developer and Ethical Hacker based in Abuja, Nigeria. I've been working in IT since 2021. <br/><br/>

                    -I help businesses get secure websites up and running fast<br/>
                    -I audit and secure businesses infrastructure against cyber threats<br/>
                    -Tech Training for Business Owners & Staff<br/>
                    -I’m a one-man tech solution for SMEs
                  </p>

                <div className={classes.sparatorLine}></div>

                 <div style={{marginBottom: '3rem'}}> 
                  <Typography variant="h5" className={classes.h1Title} gutterBottom>
                    Services I Render
                  </Typography>

                  <Grid container spacing={3}>
                    {services.map((service, index) => (
                      <Grid item xs={12} md={6} key={index}>
                        <Card elevation={3} className={classes.serviceCard}>
                          <CardContent>
                            {service.icon}
                            <Typography variant="h6" className={classes.h2Title} gutterBottom>
                              {service.title}
                            </Typography>
                            <Typography variant="body2" className={classes.theParagraph}>
                              {service.desc}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </div>

                <div className={classes.sparatorLine}></div>

                <h2 className={classes.h2Title}>Let's Connect</h2>
                <p className={classes.theParagraphUL}>Have a project in mind or simply want to chat about technology? Feel free to reach out to me at <a href="mailto:info.idoko@gmail.com" className={classes.footer} style={{display: 'inline'}}>info.idoko@gmail.com</a>.</p>


{/* 
                <p className={classes.theParagraph}>Hi 👋, I'm <span className={classes.importantText}>Daniel Idoko</span> and I'm a <span className={classes.importantText}>Website Developer & Ethical Hacking</span> living in Abuja, Nigeria. <br/>Welcome to my website where I post blogs and tutorials about topics of intrest to me, share source codes to my projects and offer free guidiance and methorship to new developers.</p>
                <p className={classes.theParagraph}>I currently work as a <span className={classes.importantText}>freelance web developer</span>. So if you gat work for me, have a question about something or just want to hala at me, drop me a mail at <span className={classes.importantText}>info.idoko@gmail.com</span></p>
                <p className={classes.theParagraph}>Even though I studied chemistry as my first degree, I had a special passion for programming that lead me to taken various online courses, building numerous projects and establishing myself as a <span className={classes.importantText}>self though programmer</span>.<br />When I'm not coding am either reading a book or viding to afro music</p>
                <p className={classes.theParagraph}>This website is <span className={classes.importantText}>100% ads free</span> because the motivation for this site is to share what I've learned with the world and hopefully connect with a few people.</p> */}
                <a href="https://github.com/doe-base" className={classes.footer}><span style={{marginRight: '0.3rem'}}>Visit my Github Profile</span>  <FaGithubAlt /> </a>
            </Grid>

        </Grid>
    )
};