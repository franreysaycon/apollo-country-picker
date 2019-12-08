import React from "react"
import { Box } from "./atoms"
import { useCurrentCountryContext } from "../hooks"

const CountryBox = ({ country }) => {
  const { code, name, continent } = country
  const countryContext = useCurrentCountryContext()
  const active = countryContext.current.code === country.code

  return (
    <Box
      key={code}
      id={code}
      active={active}
      onClick={() => countryContext.update(country)}
    >
      <h2>{name}</h2>
      <span>Continent: {continent.name}</span>
    </Box>
  )
}

export default CountryBox
