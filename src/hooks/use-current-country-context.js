import { useContext } from "react"
import { CurrentCountryContext } from "../providers/current-country"

const useCurrentCountryContext = () => {
  const { current, update } = useContext(CurrentCountryContext)

  // modify updating state to empty it if clicked again
  const updateCurrent = country => {
    if (country.code === current.code) {
      update({})
    } else {
      update(country)
    }
  }

  return { current, update: updateCurrent }
}

export default useCurrentCountryContext
