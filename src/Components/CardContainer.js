import { styled } from "styled-components";
import Card from "./card";
import { useEffect, useState, useRef, useCallback } from "react";
import _, { shuffle, isEqual } from "lodash";
const CardContainer = () => {
    const [character, setCharacter] = useState([]);
    const prevCharacterRef = useRef();
    const [fetchLength, setFetchLength] = useState(1);
    const URL = "https://api.disneyapi.dev/character";
    const [loading, setLoading] = useState(false)

   const shuffle = () =>  {
            let shuffleCharacter = _.shuffle(character);
           return shuffleCharacter
           //setCharacter(shuffleCharacter)
          }

    useEffect(() => {
        fetchCharacters(fetchData(), fetchLength);
      }, []);

      useEffect(()=> {
        if(character.every(char => char.clicked === true)){
            setFetchLength(fetchLength + 2);
        }
       
      }, [character])

      useEffect(()=> {
        console.log("fetchLength Change", fetchLength)
        fetchCharacters(fetchData(), fetchLength);

       
      }, [fetchLength])




    const fetchData = async () => {
        let response = await fetch(URL);
        const result = await response.json();
        const data = result.data;
        
        return data;
      };
    
      async function fetchCharacters(data, len) {
        data = await data;
        const randomNumArr = [];
        let arr = [];
        for (let i = 0; i < len; i++) {
          let num = randomNumber();
    
          if (!data[num].hasOwnProperty("imageUrl")) {
            return fetchCharacters(data, len);
          }
          const char = {
            id: data[num]._id,
            image: data[num].imageUrl,
            name: data[num].name,
            clicked: false,
          };
    
          arr.push(char);
        }
    
        function randomNumber() {
          let random = Math.floor(Math.random() * 50);
          if (randomNumArr.includes(random)) {
            return randomNumber();
          }
          randomNumArr.push(random);
    
          //console.log(random)
          return random;
        }
        setCharacter(arr);
      }
    
      function handleClick(id){
        
       // const shuffleCharacter = shuffle();
const updatedCharacter = character.map((char)=> {
    if (char.id === id) {
        console.log("this is the object ", char);
        return { ...char, clicked: true };
        
      }else {
      return char;
      }
})
      
setCharacter(updatedCharacter)

        
      };
      // function that shuffles the characters
      
    return (
    <section id="card-container">
      <Container>
        {character.map((char) => {
          return (
            <Card
              name={char.name}
              image={char.image }
              id={char.id}
              key={char.id}
              handleClick={ handleClick}
            />
          );
        })}
      </Container>
    </section>
  );
};









const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
  gap: 20px;
`;

export default CardContainer;
