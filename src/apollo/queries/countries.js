import { gql } from "apollo-boost"

export const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
      continent {
        name
      }
      currency
      native
    }
  }
`
