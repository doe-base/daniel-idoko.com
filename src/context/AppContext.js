import React, { useContext, useState, useEffect } from 'react';
import BlogsData from "../data/blogs.json";
import DevNotesData from "../data/dev-notes.json"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [ Blogs, setBlogs ] = useState(BlogsData);
    const [Blogsloading, setBlogsloading] = useState(false);
    const [ isNavOpen, setIsNavOpen ] = useState(false);
    const [ DarkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem('mode')));
    const [DevNotes, setDevNotes] = useState(DevNotesData)
    const [DevNotesloading, setDevNotesloading] = useState(false);


    useEffect(()=> {
        if(DarkMode === null){
            setDarkMode(true);
        }
    })


    useEffect(()=>{
        localStorage.setItem('mode', JSON.stringify(DarkMode));
    },[DarkMode]);

    return (
        <AppContext.Provider
            value = {{
                Blogs,
                DarkMode, 
                setDarkMode,
                isNavOpen,
                setIsNavOpen,
                Blogsloading,
                DevNotes,
                DevNotesloading
            }}
        >
            { children }
        </AppContext.Provider>
    )
};

export const useGlobalContext = () =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider };