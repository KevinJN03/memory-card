import { styled } from "styled-components"
import icon from "../Images/github (1).svg"
export default function Footer(){
    return(
        <Foot>
             <Name>Kevin Jean</Name>

           <a target="_blank" href="https://github.com/KevinJN03/memory-card" style={{
            display: "flex",
            justifyContent:"center",
            alignItems: "center"
           }}><IMG src={icon} alt="github favicon"></IMG></a>
            
           
        </Foot>
    )
}

const Foot = styled.footer`
position: absolute;
bottom: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
gap: 20px;
background-color: var(--red);
padding: 10px 0;
max-height: 50px;
`
const Name = styled.div`
// font-family: 'Poppins' !important;
color: var(--background);
font-size: 1.5rem;
letter-spacing: 1.5px;
font-weight: 500;
display: flex;
height: 100%;

`
const IMG = styled.img`
height: 50px;
width: 50px;
transition: transform 0.8s ease-in-out;
display: flex;
justify-content: center;
align-itemms: center;
color: green;
&:hover{
    transform: rotate(360deg);
}
`
