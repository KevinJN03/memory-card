import { styled } from "styled-components"
import donald from "../Images/donald-duck.png"

export default function Header() {
    return (
        
        <Head>
        <ImgContainer>
            <img src={donald} alt="donald-duck" style={{transform: "scaleX(-1)",
             height: "100%",
              width: "100%",
              objectFit: "cover"
            }}></img>
        </ImgContainer>
            
        <Title>Disney Memory</Title>
        </Head>
        
    
    )
}

const Head = styled.section`
display: flex;
background-Color: var(--red);
justify-Content: center;
align-items: center;

`

const Title = styled.h1`
font-family: "DisneyLand";
font-size: 3rem;
color: var(--background);
font-weight: 100
`

const ImgContainer = styled.div`
height: 100px;
padding: 30px;
`