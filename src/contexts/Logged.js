import { createContext, useState } from 'react'

const init = false
const LoggedContext = createContext(init)

const LoggedProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(init)
  return <LoggedContext.Provider value={[isLogged, setIsLogged]}>
    {children}
  </LoggedContext.Provider>
}

export { LoggedContext, LoggedProvider }