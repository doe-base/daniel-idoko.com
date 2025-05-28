import React, {useEffect} from "react";
import ContactContainer from "../containers/Contact";

export default function Contact({ DarkMode }) {

  useEffect(() => {
    document.title = 'Contact me | Daniel Idoko | Website Developer & Ethical Hacking';
  }, []);

  return (
    <ContactContainer DarkMode={DarkMode}/>
  );
};
