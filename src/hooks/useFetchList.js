import { useEffect, useState } from 'react'
import API, { arrToObj, objToArr } from 'api'


const useFetchList = (endpoint) => {
  const [data, setdata] = useState([])
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
          setdata(objToArr(result).filter((item) => item !== null))
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

export default useFetchList