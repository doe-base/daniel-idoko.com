import React, { useEffect, useState } from "react";
import SingleDevNoteContainer from "../containers/SingleDevNote";
import { useParams } from 'react-router-dom';
import { useGlobalContext } from "../context/AppContext";
import { Watch } from "react-loader-spinner";

export default function SingleDevNote({ DarkMode }) {
  const { DevNotes, DevNotesloading } = useGlobalContext();
  const { devNote_id } = useParams();
  const [item, setItem] = useState({});

  useEffect(()=>{
    if(!DevNotesloading){
      setItem(DevNotes.find(devNote => devNote._id === devNote_id));
    }
  }, [DevNotes, DevNotesloading, item, devNote_id])
  

  return (
    <>
    {
      DevNotesloading
      ?
        <div style={{
          width: '100%', 
          height: '100vh', 
          display: "flex", 
          justifyContent: 'center', 
          alignItems: "center"
          }}>
          <Watch
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="rgb(30, 175, 237)"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      :
        <SingleDevNoteContainer item={item} DarkMode={DarkMode} DevNotes={DevNotes}/>

    }
    </>
  );
}
