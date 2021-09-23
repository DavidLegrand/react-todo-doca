import { createContext, useState, useEffect } from 'react'
import useFetchList from 'hooks/useFetchList'
import TaskModel from 'models/Task'

const initialList = []
const ListContext = createContext(initialList)

const ListProvider = ({ children }) => {
  const [list, setlist] = useState(initialList)

  const { data, error, loading } = useFetchList('tasks.json')
  useEffect(() => setlist(data?.map((t) => new TaskModel(t))), [data, setlist])

  return <ListContext.Provider value={[list, setlist, error, loading]}>
    {children}
  </ListContext.Provider>
}

export { ListContext, ListProvider }