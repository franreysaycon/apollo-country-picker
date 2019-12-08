import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import CurrentContextProvider from "./src/providers/current-country"
import "typeface-poppins"
import fetch from "isomorphic-fetch"

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  fetch,
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <CurrentContextProvider>{element}</CurrentContextProvider>
  </ApolloProvider>
)
