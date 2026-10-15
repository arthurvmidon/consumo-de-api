import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchCharAPI( url, char){
  const [ret, setRet] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(true)

    useEffect(() => {
    const getData = async () => {
      try {
        const responseDBZ = await axios.get(
          `${url}/${char}`)
        setRet(responseDBZ.data)
        
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
        console.log("Error: ", error)
      }
    }
    getData()
  }, [])
    return[loading, error, ret]
}
