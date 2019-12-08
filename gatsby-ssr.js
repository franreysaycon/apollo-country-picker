import React from "react"
import CurrentContextProvider from "./src/providers/current-country"
import "typeface-poppins"

export const wrapRootElement = ({ element }) => (
  <CurrentContextProvider>{element}</CurrentContextProvider>
)
