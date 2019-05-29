import axios from 'axios';

const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

const config = {
	key: '?api_key=' + process.env.REACT_APP_API_TOKEN,
	lang: '&language=pt'
}

//?language=pt&media_type=movie&vote_count.gte=0&list_style=1&primary_release_year=2016&sort_by=popularity.desc

//
//	Filmes
//
export const getMovieById = ( id ) => api.get('/movie/' + id + config.key );
export const getMovies = ( page ) => api.get('discover/movie' + config.key + config.lang + '&page=' + page);
export const getGenres = () => api.get('genre/movie/list' + config.key );

const apis = {
	getMovieById,
	getMovies,
	getGenres
}

export default apis;