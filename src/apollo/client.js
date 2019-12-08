import ApolloClient, { InMemoryCache } from "apollo-boost"

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache,
})

export default client
