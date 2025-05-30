import React, { useEffect } from "react";
import BlogContainer from "../containers/Blog";


export default function BlogPage({DarkMode}){
  
  useEffect(() => {
    document.title = 'Blogs | Daniel Idoko | Website Developer & Ethical Hacking';
  }, []);

    return(
      <BlogContainer DarkMode={DarkMode} />  
    )
};