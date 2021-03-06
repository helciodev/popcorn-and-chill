const key = process.env.REACT_APP_TMDB_API;
export const movieExtent = 'https://image.tmdb.org/t/p/w342/';

export async function popularMovies(page, scoreValue) {
  let apiUrl = '';
  if (!scoreValue) {
    apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page || 1}`;
  } else {
    apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page || 1}&vote_average.gte=${scoreValue}&vote_average.lte=${parseInt(scoreValue, 10) + 0.9}&with_watch_monetization_types=free`;
  }

  const response = await fetch(apiUrl);
  const data = await response.json();

  return data.results;
}

export async function movieDetails(id) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

export async function searchMovie(movie) {
  const api = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${movie}&page=&include_adult=false`;
  const response = await fetch(api);
  const data = await response.json();
  return data.results;
}
