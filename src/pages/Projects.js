import React, { useEffect } from "react";
import ProjectContainer from "../containers/Project";


export default function ProjectPage({DarkMode}){

  useEffect(() => {
    document.title = 'Projects | Daniel Idoko | Website Developer & Ethical Hacking';
  }, []);

    return(
      <ProjectContainer DarkMode={DarkMode} />  
    )
};
