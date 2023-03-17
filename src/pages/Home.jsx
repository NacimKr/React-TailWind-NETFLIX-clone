import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import APIMovies from '../APIMovies'

const Home = () => {

  const [typeMovies, setTypeMovies] = useState([]);

  useEffect(() => {
    const getType = async() => {
      let res =  await APIMovies.getAllMovies()
      setTypeMovies(res)
    }
    getType();
  },[])

  console.log(typeMovies[0]);

  return (
    <div>
      <Main />
      <Row title="Up Coming" data={typeMovies[0]?.upComing} />
      <Row title="Popular" data={typeMovies[0]?.popular} />
      <Row title="Top Rated" data={typeMovies[0]?.topRated} />
      <Row title="Trending" data={typeMovies[0]?.trending} />
    </div>
  )
}

export default Home