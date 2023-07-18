import { styled } from "styled-components";
import Card from "./card";
import { useEffect, useState } from "react";
import _ from "lodash";
import GameOver from "./GameOver";
import Score from "./score";


const CardContainer = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [character, setCharacter] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const initialLength = 3;
  const [fetchLength, setFetchLength] = useState(initialLength);
  const URL = "https://api.disneyapi.dev/character";

  async function fetchData(){
    let response = await fetch(URL);
    const result = await response.json();
    const data = await result.data;

    return data
  };

  async function fetchCharacters(data, len) {
 data = await data;
    const randomNumArr = [];
    let arr = [];
    for (let i = 0; i < len; i++) {
     const num = randomNumber();
//let num = i
    //   if (!data[num].hasOwnProperty("imageUrl")) {
    //     return fetchCharacters(data, len);
    //   }
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

      return random;
    }



    setCharacter(arr)
  }
  

  const shuffle = () => {
    const shuffleCharacter = _.shuffle(character);
    
    return shuffleCharacter;
    
  };

  useEffect(() => {
      fetchCharacters(fetchData(), fetchLength)
  }, []);

  useEffect(() => {
    if (
      character.length !== 0 &&
      character.every((char) => char.clicked === true)
    ) {
      setFetchLength(fetchLength + 2);
    }
  }, [character]);

  useEffect(() => {
  fetchCharacters(fetchData(), fetchLength);
  }, [fetchLength]);

  const restartGame = () => {
    setGameOver(false);
    if(fetchLength == initialLength){
      fetchCharacters(fetchData(), initialLength);
    }else {
      setFetchLength(initialLength)
    }
    setScore(0)
  };

  

  useEffect(() => {
    if(score > bestScore){
        setBestScore(score)
    }
  }, [score])
  

  function handleClick(id) {
    const shuffleCharacter = shuffle();
    const updatedCharacter = shuffleCharacter.map((char) => {
      if (char.id === id) {
        if (!char.clicked) {
          setScore(score + 1);
          return { ...char, clicked: true };
        } else {
          setGameOver(true);
          return char;
        }
      }
      return char;
    });

    setCharacter(updatedCharacter);
  }
  // function that shuffles the characters

  return (
    <section id="card-container">
      <Score score={score} bestScore={bestScore}/>
      {gameOver ? <GameOver restart={() => restartGame()} score={score} /> :
      <Container >

        {character.map((char) => {
          return (
            <Card
              name={char.name}
              image={char.image}
              id={char.id}
              key={char.id}
              handleClick={handleClick}
            />
          );
        })}
      </Container>
      }
      
    </section>
  );
};

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 80%;
  gap: 20px 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto

`;

export default CardContainer;
