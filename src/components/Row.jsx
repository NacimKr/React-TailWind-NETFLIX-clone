import React, { useState } from 'react'
import Movie from './Movie';

const Row = ({title, data}) => {

  console.log(data)
  return (
    <div className="mt-8 m-2">
      <h2 className="text-white font-black text-xl">{title}</h2>

      <div className="flex gap-4 mt-2 flex-wrap">
        {
          data.results.map(image => {
            return (
              <Movie image={image} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Row