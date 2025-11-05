import React, { useEffect } from "react";
import DevNotesContainer from "../containers/DevNotes";


export default function DevNotePage({DarkMode}){
  
  useEffect(() => {
    document.title = 'Dev Notes | Daniel Idoko | Website Developer & Ethical Hacking';
  }, []);

    return(
      <DevNotesContainer DarkMode={DarkMode} />  
    )
};