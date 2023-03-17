import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({image}) => {
    const [like, setLike] = useState(false);

  return (
    <div className=" cursor-pointer relative">
        <img 
            className="w-full h-auto object-cover z-20 bg-gray-800 "
            src={`https://image.tmdb.org/t/p/original/${image?.poster_path}`} 
            alt={image?.title} 
            style={{"width": "250px"}}
        />
        <div className="absolute opacity-0 text-center top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 hover:z-50 text-white">
            <p className="flex items-center h-full font-bold text-center">
                {image?.title}
            </p>
            <div className="absolute top-2 left-2">
                {like ? <FaHeart /> : <FaRegHeart />}
            </div>
        </div>
    </div>
  )
}

export default Movie