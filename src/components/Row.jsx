import React from 'react'

const Row = ({title, data}) => {
  console.log(data)
  return (
    <div className="mt-8 m-2">
      <h2 className="text-white font-black text-xl">{title}</h2>

      <div className="flex gap-4 mt-2 flex-wrap">
        {
          data.results.map(image => {
            return (
              <div className="inline-block cursor-pointer relative">
                <img 
                  className="w-full h-auto object-cover z-20 bg-gray-800 "
                  style={{"width":"150px"}} 
                  src={`https://image.tmdb.org/t/p/original/${image.poster_path}`} 
                  alt={image.title} />
                <div className="absolute opacity-0 text-center top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 hover:z-50 text-white">
                  <p className="flex items-center h-full font-bold text-center">{image.title}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Row