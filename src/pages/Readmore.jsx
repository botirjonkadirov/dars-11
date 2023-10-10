import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from 'react'
function Readmore() {
    const {id} = useParams()
    const url = 'https://api.kinopoisk.dev/v1.2/movie/search?query=&token=7X6SZ1X-YQF4VWX-HJ3WWV6-EKWZHJV'
    const{data: recipe, isPending, error} = useFetch(url)
    console.log(url)
  return (
    <div className='flex justify-content-center align-items-center '>
        {recipe&&<div className="my-5 card w-full glass">
  <figure><img src={recipe.img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{recipe.title}</h2>
    <p>{recipe.method}</p>
    <p className='text-2xl'>Cooking time: {recipe.cookingTime}</p>
    <div className="card-actions justify-end">
      <Link to='/' className="btn btn-primary">Back to homepage</Link>
    </div>
  </div>
</div>}
    </div>
  )
}

export default Readmore