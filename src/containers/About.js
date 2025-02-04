import React from "react";
import { Grid } from "@mui/material";
import useStyles from "../styles/about";
import { FaGithubAlt } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from "../context/AppContext"

export default function  AboutContainer({DarkMode}){
    const classes = useStyles({ DarkMode });
    const { setIsNavOpen } = useGlobalContext();
    const backgroundColor = `${DarkMode ? "rgba(248, 249, 250, 0.2)" : "rgb(248, 249, 250)"}`;

    return(
        <Grid container className={classes.root} style={{backgroundColor: backgroundColor}}>
            
            <Grid item xs={12} md={6} className={classes.test2}>
                <div className={classes.label} onClick={()=> setIsNavOpen(true)}>
                    <MenuIcon className={classes.menuIcon}/>
                    <h5 className={classes.name} style={{margin: '0'}}>Daniel Idoko</h5>
                </div>
            </Grid>

            <Grid item xs={12} md={6} className={classes.test}>
                <h1 className={classes.h1Title}>Daniel Idoko - Software Developer</h1>

                <div className={classes.sparatorLine}></div>

                <p className={classes.theParagraph} style={{marginBottom: '3rem'}}>I'm Daniel Idoko, a Solutions Architect based in Abuja, Nigeria. I've been in IT since 2021. With a background in chemistry, I discovered my true calling in programming and have dedicated myself to mastering the craft.</p>

                <div className={classes.sparatorLine}></div>

                <h2 className={classes.h2Title}>Service I Render</h2>
                <ul className={classes.theParagraphUL} style={{paddingLeft: '5px', marginBottom: '3rem'}}>
                    <li style={{marginBottom: '0.6rem'}}><span className={classes.importantText}>✅ Build Secure & Scalable Web Applications</span>: I develop fast, SEO-friendly, secure, full stack web applications that help businesses grow and operate efficiently. <br />
                    
                    <p><span className={classes.importantText}>Tech</span>: React, Next.js, Golang, Node.js, Firebase, MySQL, PostgreSQL, MongoDB</p>
                    </li>

                    <li style={{marginBottom: '0.6rem'}}><span className={classes.importantText}>✅ Optimize & Secure IT Infrastructure</span>: I design and manage business networks topologies and Infrastructures. I priorities security, reliability, and high performance. <br />
                    
                    <p><span className={classes.importantText}>Tech</span>: Linux, Windows, Firewalls, VPNs, Bash, Automation, Security best practices</p>
                    </li>

                    <li style={{marginBottom: '0.6rem'}}><span className={classes.importantText}>✅ Automate & Scale with Cloud Technologies</span>: I help businesses migrate to the cloud, set up CI/CD pipelines, and automate workflows for efficiency. <br />
                    
                    <p><span className={classes.importantText}>Tech</span>: AWS, Google Cloud, Docker, Kubernetes, Terraform, CI/CD, Python</p>
                    </li>
                </ul>

                <div className={classes.sparatorLine}></div>

                <h2 className={classes.h2Title}>My Experience</h2>
                <ul className={classes.theParagraphUL} style={{paddingLeft: '5px', marginBottom: '3rem'}}>
                    <li style={{marginBottom: '0.6rem'}}><span className={classes.importantText}>Freelance Web Developer</span>: I've honed my skills through various freelance projects, delivering high-quality web applications that meet client needs.</li>
                    <li style={{marginBottom: '0.6rem'}}><span className={classes.importantText}>Open-Source Contributions</span>:  I'm actively involved in the open-source community, contributing to projects and sharing my knowledge with others.</li>
                    <li style={{marginBottom: '0.6rem'}}><span className={classes.importantText}>Mentorship</span>: I'm committed to helping aspiring developers by offering free guidance and mentorship.</li>
                </ul>

                <div className={classes.sparatorLine}></div>

                <h2 className={classes.h2Title}>Let's Connect</h2>
                <p className={classes.theParagraphUL}>Have a project in mind or simply want to chat about technology? Feel free to reach out to me at <a href="mailto:info.idoko@gmail.com" className={classes.footer} style={{display: 'inline'}}>info.idoko@gmail.com</a>.</p>


{/* 
                <p className={classes.theParagraph}>Hi 👋, I'm <span className={classes.importantText}>Daniel Idoko</span> and I'm a <span className={classes.importantText}>software development</span> living in Abuja, Nigeria. <br/>Welcome to my website where I post blogs and tutorials about topics of intrest to me, share source codes to my projects and offer free guidiance and methorship to new software developers.</p>
                <p className={classes.theParagraph}>I currently work as a <span className={classes.importantText}>freelance web developer</span>. So if you gat work for me, have a question about something or just want to hala at me, drop me a mail at <span className={classes.importantText}>info.idoko@gmail.com</span></p>
                <p className={classes.theParagraph}>Even though I studied chemistry as my first degree, I had a special passion for programming that lead me to taken various online courses, building numerous projects and establishing myself as a <span className={classes.importantText}>self though programmer</span>.<br />When I'm not coding am either reading a book or viding to afro music</p>
                <p className={classes.theParagraph}>This website is <span className={classes.importantText}>100% ads free</span> because the motivation for this site is to share what I've learned with the world and hopefully connect with a few people.</p> */}
                <a href="https://github.com/doe-base" className={classes.footer}><span style={{marginRight: '0.3rem'}}>Visit my Github Profile</span>  <FaGithubAlt /> </a>
            </Grid>

        </Grid>
    )
};