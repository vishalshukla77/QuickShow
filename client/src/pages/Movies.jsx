import React from 'react'

import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'
function Movies() {
  return dummyShowsData.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-60 xl:px-44 overflow-hidden min-h-[80vh]'>

      <BlurCircle top="150px" left="0px"/>
      <BlurCircle top="50px" left="50x"/>

      <h1 className='text-lg font-medium my-4'>Now showing</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8' >
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (<div>
    
  </div>);
}

export default Movies;
