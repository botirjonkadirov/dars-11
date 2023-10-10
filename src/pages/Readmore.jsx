import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from 'react'
function Readmore() {
    const {id} = useParams()
    const url = `https://api.kinopoisk.dev/v1.2/movie/search?query=${id}&token=7X6SZ1X-YQF4VWX-HJ3WWV6-EKWZHJV`
    const{data: isPending, error} = useFetch(url)
   
  return 
}

export default Readmore