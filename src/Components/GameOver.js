import { styled } from "styled-components"

export default function GameOver({restart, score}) {
    return(
        <GameOverContainer>
        <p style={{
            fontSize: "2.5rem",
        }}>GameOver</p>
        <p style={{
            fontSize: "1.5rem",
        }}>Congratulations your Score is {score}</p>
        <Btn type="button" onClick={restart}>New Game</Btn>
        </GameOverContainer>
    )
}


const Btn = styled.button`
padding: 10px 20px;
border-radius: 15px;
font-size: 1.2rem
`

const GameOverContainer = styled.div`
margin-top: 100px;

`