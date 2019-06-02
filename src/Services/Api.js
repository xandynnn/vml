import axios from 'axios';

const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

const config = {
	key: '?api_key=' + process.env.REACT_APP_API_TOKEN,
	lang: '&language=en-US'
}

//?language=pt&media_type=movie&vote_count.gte=0&list_style=1&primary_release_year=2016&sort_by=popularity.desc
// genero &with_genres[]=12

//
//	Filmes
//
export const getMovieById = ( id ) => api.get('/movie/' + id + config.key );
export const getMovies = ( page ) => api.get('discover/movie' + config.key + config.lang + '&page=' + page);
export const getGenres = () => api.get('genre/movie/list' + config.key );
export const getCredits = (movieId) => api.get('/movie/' + movieId + '/credits' + config.key + config.lang);
export const getReviews = (movieId) => api.get('/movie/' + movieId + '/reviews' + config.key + config.lang);
export const getVideos = ( movieId ) => api.get('/movie/' + movieId + '/videos' + config.key + config.lang);
export const getImages = ( movieId ) => api.get('/movie/' + movieId + '/images' + config.key + config.lang);

const apis = {
	getMovieById,
	getMovies,
	getGenres,
	getCredits,
	getReviews,
	getVideos,
	getImages
}

export default apis;