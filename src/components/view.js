import React, { memo } from "react"
import { useQuery } from "@apollo/react-hooks"
import { GET_COUNTRIES } from "../apollo/queries/countries"
import { Container } from "./atoms"
import CountryBox from "./country-box"
import styled from "styled-components"
import { navigate } from "gatsby"

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: Poppins;
  justify-content: center;
  align-items: center;

  & > div {
    width: 100%;
  }

  & > span {
    margin-bottom: 10px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

const MainView = () => {
  const { loading, data, error } = useQuery(GET_COUNTRIES)

  const navigateToSpecific = () => {
    navigate("/country")
  }

  if (loading) return <h1>Fetching countries</h1>
  else if (error) return <h1>There was an error</h1>

  return (
    <MainContainer>
      <span onClick={navigateToSpecific}>Navigate to current</span>
      <Container>
        {data.countries.map(country => (
          <CountryBox country={country} key={country.code} />
        ))}
      </Container>
    </MainContainer>
  )
}

export default memo(() => <MainView />)
