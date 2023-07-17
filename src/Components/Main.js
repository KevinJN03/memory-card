import { useEffect, useState, CSSProperties } from "react";
import CardContainer from "./CardContainer";

import ClipLoader from "react-spinners/ClipLoader";



function Main() {
  const [character, setCharacter] = useState([]);
  const [fetchLength, setFetchLength] = useState(4);
  const URL = "https://api.disneyapi.dev/character";
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false)
    }, 2000)
    

    
  }, []);

 

  return (
    <>
    {
       loading ? 
<ClipLoader
        color="#000000"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

       : 
       <CardContainer
     ></CardContainer>
    }
     
    </>
  );
}

export default Main
