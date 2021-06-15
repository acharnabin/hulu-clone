
const Api_key = process.env.React_App_TMDB_API;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrending: {
    title: "trending",
    url: `/trending/all/day?api_key=${Api_key}`,
    
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/genre/movie/list?api_key=${Api_key}&language=en-US`,
  },
  fetchActionMovies: {
    title: "action",
    url: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "comedy",
    url: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  },
  fetchRomanticMovies: {
    title: "romantic",
    url: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  },
  fetchHorrorMovies: {
    title: "horror",
    url: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  },
  fetchThrillerMovies: {
    title: "Thriller",
    url: `/discover/movie?api_key=${Api_key}&with_genres=53`,
  },
};
