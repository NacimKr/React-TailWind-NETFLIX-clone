import React, { useEffect, useState } from 'react'
import APIMovies from '../APIMovies';

const Main = () => {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const loadMovies = async() => {
           const moviesData = await APIMovies.getAllMovies();
           setMovies(moviesData[0].popular.results);
        }
        loadMovies();
    }, []);
    
    const moviesHeader = movies[Math.floor(Math.random() * movies.length)]
    //console.log(moviesHeader)

  return (
    <div className="w-full h-[500px] text-white">
      <div className="absolute w-full h-[500px] bg-gradient-to-r from-black z-40">
          <img 
            className="w-full h-full object-cover z-20 opacity-25" 
            src={`https://image.tmdb.org/t/p/original/${moviesHeader?.backdrop_path}`} 
            alt="" 
          />
          <div className="absolute bottom-10 m-4">
            <h1 className="mb-7 font-black text-3xl">{moviesHeader?.title}</h1>
            <div className="bottom-40 flex gap-4 ">
              <button className="border p-2.5 bg-slate-100 text-black font-black">Lecture</button>
              <button className="border-2 p-2.5 text-white font-black">Regarder plus tard</button>
            </div>
            <p className="mt-7 font-black">Réalisé le  : {moviesHeader?.release_date}</p>
            <p>
              {moviesHeader?.overview}
            </p>
          </div>
      </div>
    </div>
  )
}

export default Main