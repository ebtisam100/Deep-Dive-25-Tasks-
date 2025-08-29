import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      setLoading(true)  
      setError(null)

      try {
        const res = await fetch(url)

        if (!res.ok) {
          throw new Error("Error")
        }
        const result = await res.json()
        setData(result)
      } 
      catch (err) {
        setError(err.message)
      } 
      finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])
  return { data, loading, error }
}

export default useFetch
