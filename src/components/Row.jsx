import React from 'react'

const Row = ({title, data}) => {
  console.log(data)
  return (
    <div className="mt-5 m-2">
      <h2 className="text-white font-black text-2xl">{title}</h2>

      <div className="flex gap-2 mt-2">
        {
          data.results.map(image => {
            return (
              <img 
                className="w-full h-full object-cover z-20" 
                src={`https://image.tmdb.org/t/p/w200/${image.poster_path}`} 
                alt="" 
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Row