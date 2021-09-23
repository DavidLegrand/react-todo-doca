import { useEffect, useState } from 'react'
import API, { arrToObj, objToArr } from 'api'

const useFetch = (endpoint) => {
  const [data, setdata] = useState()
  const [error, seterror] = useState(null)
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setloading(true); seterror(null); setdata(null);
      try {
        const res = await fetch(`${API}${endpoint}`)
        if (!res.ok) throw new Error(res.statusText)
        else {
          const result = await res.json()
          if (result)
            setdata(result)
          else throw new Error('404 : Ressource introuvable')
        }
      } catch (e) {
        seterror(e)
      }
      setloading(false)
    }
    fetchData()
  }, [endpoint])
  return { data, error, loading }
}

export default useFetch