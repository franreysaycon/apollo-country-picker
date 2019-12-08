import styled from "styled-components"

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: tomato
    width: 400px;
    height: 300px;
    font-family: Poppins;
    border-radius: 20px;
    flex-direction: column;

    & > h2 {
        color: white;
        margin: 0;
    }

    & >span:first {
        margin-bottom: 10px;
    }
`

export default Card
