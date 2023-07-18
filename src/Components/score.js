import { styled } from "styled-components"

export default function Score({score, bestScore}) {
    return(
    
    <ScoreContainer>
        <h3>Score: {score} | Best Score: {bestScore}</h3>
    </ScoreContainer>
            
        )
}

const ScoreContainer = styled.div`
margin-top: 20px;
font-size: 1.3rem;
`