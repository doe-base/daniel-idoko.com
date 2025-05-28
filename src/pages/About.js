import React, {useEffect} from "react";
import AboutContainer from "../containers/About";


export default function About({DarkMode}) {
  useEffect(() => {
    document.title = 'About me | Daniel Idoko | Website Developer & Ethical Hacking';
  }, []);
  return (
    <AboutContainer DarkMode={DarkMode}/>
  );
};
