import styled from "styled-components"

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid #222222;
  height: 100px;
  text-align: center;
  padding: 5px;
  background-color: ${({ active }) => active && "tomato"};
  cursor: pointer;

  & > h2 {
    color: ${({ active }) => (active ? "white" : "tomato")};
    margin: 0;
  }
`

export default Box
