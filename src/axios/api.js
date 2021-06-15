const Api_key = process.env.React_App_TMDB_API;
export const baseUrl = `https://api.themoviedb.org/3`;
export const fetchCategory = `${baseUrl}/genre/movie/list?api_key=${Api_key}&language=en-US`;
export const fetchMovieById = `${baseUrl}/discover/movie?api_key=${Api_key}&with_genres=`;
export const fetchForHome=`${baseUrl}/trending/all/day?api_key=${Api_key}`;