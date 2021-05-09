import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [datas, setDatas] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data from that resoursce")
          }
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setDatas(data)
          setLoading(false)
          setError(null)
        })
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        })
    }, 2000)
  }, [url])

  return { datas, isLoading, error }
}

export default useFetch
