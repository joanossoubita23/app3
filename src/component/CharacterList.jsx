import { useEffect, useState } from "react";
import Character from "./Character";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

  
    useEffect(() => {
        async function fetchData() {
            try {
              const data = await fetch("https://finalspaceapi.com/api/v0/character");
              
              const  results  = await data.json();
              console.log(results);
              setCharacters(results);
            } catch (error) {
              console.error("Error fetching data " + error);
              setError("Error fetching data. Please try again later.");
            }  
        
      }
  
      fetchData()
    }, [])
  
    return (
        <div className="character-list">
          {characters && characters.map((character) => (
            <Character key={character.id} {...character} />
          ))}
        </div>
      );
      
          }
  
 


export default CharacterList;
