import React, { useState } from "react"

export const CurrentCountryContext = React.createContext()

const CurrentCountryProvider = ({ children }) => {
  const [currentCountry, updateCurrentCountry] = useState({})

  return (
    <CurrentCountryContext.Provider
      value={{
        current: currentCountry,
        update: country => updateCurrentCountry(country),
      }}
    >
      {children}
    </CurrentCountryContext.Provider>
  )
}

export default CurrentCountryProvider
