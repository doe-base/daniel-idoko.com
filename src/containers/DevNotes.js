import React, {useState, useEffect, useMemo} from "react";
import useStyles from "../styles/blog";
import { Button, Grid } from "@mui/material";
import BlogCard2 from "../components/BlogCard2";
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from "../context/AppContext"
import Preloader from "../components/Preloader";

function getTop4HighestViewBlog(data) {
  const sortedData = [...data].sort((a, b) => b.views - a.views);
  const top4HighestViews = sortedData.slice(0, 4);
  return top4HighestViews;
}

export default function DevNotesContainer({ DarkMode, }){

    const classes = useStyles({DarkMode});
    const { setIsNavOpen, DevNotes, Blogsloading } = useGlobalContext();
    const [topDevNotes, setTopDevNotes] = useState(DevNotes);


    const groupedBlogs = useMemo(() => {
      return DevNotes.reduce((acc, item) => {
        const year = item.year; // Use the year from your data
        if (!acc[year]) acc[year] = [];
        acc[year].push(item);
        return acc;
      }, {});
    }, [DevNotes]);
      
      useEffect(()=>{
        if(!Blogsloading){
          setTopDevNotes(getTop4HighestViewBlog(DevNotes))
        }
      }, [DevNotes]);

      useEffect(()=>{
        const backToTopButton = document.getElementById("backToTop")
        window.addEventListener('scroll', () => {
          if (window.scrollY > 250) {
            backToTopButton.style.display = 'block';
          } else {
            backToTopButton.style.display = 'none';
          }
        });
      });
    
      const backToTop =()=>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    

    return(
        <Grid className={classes.root}>

            <div className={classes.label} onClick={()=> setIsNavOpen(true)}>
                <MenuIcon className={classes.menuIcon}/>
                <h5 className={classes.name} style={{margin: '0'}}>Daniel Idoko</h5>
            </div>

            <div>
              {
                  Blogsloading 
                  ?
                    <Preloader /> 
                  :
                    <div>
                       <section className={classes.section}>
                          <h2 className={classes.title}>Blogs</h2>
                          {
                            Object.keys(groupedBlogs).sort((a, b) => b - a).map(year => (
                              <div key={year} style={{marginBottom: '2.5rem'}}>
                                <h3 className={classes.yearTitle}>{year}</h3>
                                {
                                  groupedBlogs[year].map(item => (
                                    <a href={`/dev-note/${item._id}`} key={item._id} id="blog-card" className={classes.blogCard}>
                                        <p id="blog-text" className={classes.blogText} style={{display: 'block'}}>{item.title}</p>
                                        <time className={classes.dateText} style={{display: 'block'}}>{item.date.slice(0, -6)}</time>
                                    </a>
                                  ))
                                }
                              </div>
                            ))
                          }
                      </section>
                      

                        <section className={classes.section}>
                            <h2 className={classes.title}>Popular Release</h2>

                            <Grid container>
                                {
                                  topDevNotes &&
                                  topDevNotes.map(item => <BlogCard2 item={item} DarkMode={DarkMode}/>)
                                }
                                
                            </Grid>
                        </section>
                    </div>
              }
            </div>

            
            <div id="backToTop" className={classes.bttContainer}>
                <Button variant="outlined" className={classes.backToTop} onClick={backToTop}>back to top</Button>
            </div>
        </Grid>
    )
}