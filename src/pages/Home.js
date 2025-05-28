import React, {useEffect} from "react";
import HomeContainer from "../containers/Home";

export default function Home({ DarkMode }) {

  useEffect(() => {
    document.title = 'Home | Daniel Idoko | Website Developer & Ethical Hacking';
  }, []);

  return (
    <HomeContainer DarkMode={DarkMode}/>
  )
};
