import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
function Create() {
  const {id}= useParams()
  const [films, setFilms] = useState('')
  const [find, setFind]= useState(``)
  const url = `https://api.kinopoisk.dev/v1.2/movie/search?query=${find}&token=7X6SZ1X-YQF4VWX-HJ3WWV6-EKWZHJV`
  const{data: film, isPending, error} = useFetch(url)
  function get (e){
    e.preventDefault()
    setFind(films)
    console.log(films)
  }
  console.log(films)
  console.log(film)
  

  return (
    <div className='flex flex-col mx-auto'>
        <h1 className='my-3 text-2xl text-center'>Write your recipe</h1>
        <form className=' flex flex-col gap-4' onSubmit={get}>
        <div className='flex justify-between'>
       <label className='px-5 text-2xl ' htmlFor="title">Name</label>
        <input className='border bg-blue-100  placeholder-slate-700 placeholder-glow  text-slate-950 rounded' onChange={(e)=>setFilms(e.target.value)} type="text" id="title" placeholder='aricle title' />
       </div>
        <button className='btn btn-success w-20' type='submit'>Search</button>
        </form>
    

     {film&& film.docs.map((r)=>{
          const {id,poster, names, rating} = r;
         return (
         <div className='w-full md:max-w-full bg-base-100 image-full' key={id}>
          <div className="w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={poster} alt={id} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{names[1]}</h2>
    <p>Rating: {rating}</p>
    <div className="card-actions">
      <Link className="btn btn-primary" to='/'>Read More</Link>
    </div>
  </div>
</div>
        </div>)
       })}

    </div>
  )
}

export default Create