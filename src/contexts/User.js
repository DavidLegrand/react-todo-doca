import { createContext, useState } from 'react'

const initialUser = { id: 1, login: 'david', firstName: 'David', lastName: 'Legrand' }
const UserContext = createContext(initialUser)

const UserProvider = ({ children }) => {
  const [user, setuser] = useState(initialUser)
  return <UserContext.Provider value={[user, setuser]}>
    {children}
  </UserContext.Provider>
}

export { UserContext, UserProvider }