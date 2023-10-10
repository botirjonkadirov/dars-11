import React from 'react'
import { Link } from 'react-router-dom';
function Recipie({kino}) {
  console.log(kino)
  return (
    <ul className='grid place-items-center gap-4 mb-auto lg:grid-cols-3 md:grid-cols-1'>
       {kino&& kino.docs.map((r)=>{
          const {id,poster, names, rating} = r;
         return (
         <li className='w-full md:max-w-full bg-base-100 image-full' key={id}>
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
        </li>)
       })}
    </ul>
  )
}

export default Recipie