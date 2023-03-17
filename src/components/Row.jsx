import React, { useState } from 'react'
import Movie from './Movie';

const Row = ({title, data}) => {

  console.log(data)
  return (
    <div className="mt-8 m-2">
      <h2 className="text-white font-black text-xl ml-24 mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {
          data.results.map((image, index) => {
            return (
              <Movie key={index} image={image} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Row