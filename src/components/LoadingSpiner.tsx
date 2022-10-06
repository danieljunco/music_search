import styled from "styled-components"


export default function LoadingSpiner() {
   return(
    <Spiner></Spiner>
   ) 
}



const Spiner = styled.span`
    width: 24px;
    height: 24px;
    border: 3px solid grey;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`