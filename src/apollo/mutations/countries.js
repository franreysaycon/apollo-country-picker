import { gql } from "apollo-boost"

export const REMOVE_COUNTRY = gql`
  mutation RemoveCountry($code: String!) {
    removeCountry(code: $code) @client
  }
`
