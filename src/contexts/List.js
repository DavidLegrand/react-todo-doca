import { createContext, useState } from 'react'

const initialList = []
const ListContext = createContext(initialList)

const ListProvider = ({ children }) => {
  const [list, setlist] = useState(initialList)
  return <ListContext.Provider value={[list, setlist]}>
    {children}
  </ListContext.Provider>
}

export { ListContext, ListProvider }