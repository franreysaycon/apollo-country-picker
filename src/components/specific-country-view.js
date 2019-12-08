import React from "react"
import { useCurrentCountryContext } from "../hooks"
import { Card } from "./atoms"
import styled from "styled-components"
import { navigate } from "gatsby"

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: Poppins;
  flex-direction: column;

  & > span {
    margin-top: 10px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

const SpecificCompanyView = () => {
  const countryContext = useCurrentCountryContext()
  const navigateBack = () => {
    navigate("/")
  }

  const { name, currency, continent, native } = countryContext.current

  return (
    <MainContainer>
      <Card>
        {name ? (
          <>
            <h2>{name}</h2>
            <span>{native}</span>
            <br />
            <span>
              Currency: <b>{currency}</b>
            </span>
            <span>
              Continent: <b>{continent.name}</b>
            </span>
          </>
        ) : (
          <h2>Nothing was selected yet!</h2>
        )}
      </Card>
      <span onClick={navigateBack}>{"<<< Go Back"}</span>
    </MainContainer>
  )
}

export default SpecificCompanyView
