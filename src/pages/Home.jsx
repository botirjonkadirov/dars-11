import React, { useState } from 'react'
import Recipie from './Recipie'
import { useFetch } from '../../hooks/useFetch'

function Home() {
  const url = 'https://api.kinopoisk.dev/v1.2/movie/search?query=&token=7X6SZ1X-YQF4VWX-HJ3WWV6-EKWZHJV'
  const {data:kino, isPending, error} = useFetch(url)
  console.log(kino)
  return <>{kino && <Recipie kino={kino}/>}</>
  
}

export default Home