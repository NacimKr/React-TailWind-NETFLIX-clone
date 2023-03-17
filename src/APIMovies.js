const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.themoviedb.org/3`;

const fetchMovieDataBase = async(entrypoint) => {
    return await fetch(`${API_URL}${entrypoint}?api_key=${API_KEY}`)
    .then(res => res.json())
}

export default {
    getAllMovies : async() => {
        return [
            {
                popular: await fetchMovieDataBase("/movie/popular"),
                topRated: await fetchMovieDataBase("/movie/top_rated"),
                trending: await fetchMovieDataBase("/trending/all/day"),
                upComing: await fetchMovieDataBase("/movie/upcoming")
            }
        ]
    }
}