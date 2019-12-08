import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import client from "./src/apollo/client"
import CurrentContextProvider from "./src/providers/current-country"
import "typeface-poppins"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <CurrentContextProvider>{element}</CurrentContextProvider>
  </ApolloProvider>
)
