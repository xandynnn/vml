import React, { Component } from 'react';

//
//	Components
//
import MoviesList from '~/Components/Movies/MoviesList/MoviesList';
import Pagination from '~/Components/Pagination/Pagination';
import Filter from '~/Components/Movies/Filter/Filter';

//
//	Services
//
import api from '~/Services/Api';
import Util from '~/Services/Util';

//
//	Styles
//
import './Movies.css';

export default class Movies extends Component{

	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			movies:[],
			pagination:{}
		}
	}

	//
	//	Mount
	//
	componentDidMount(){
		
		//
		//	Carrega Videos
		//
		this.loadMovies( Util.getCurrentPage() )

	}

	//
	//	Carrega todos os filmes
	//
	loadMovies( page ){
		api.getMovies( page )
		.then((res)=>{
			this.setState({
				isLoading: false,
				movies: res.data.results,
				pagination:{
					atualPage: res.data.page,
					totalPages: res.data.total_pages,
					totalResults: res.data.total_results
				},
				page: res.data.page
			});
		});
	}

	render(){
		return(
			<main>
				{ !this.state.isLoading &&
				<div id="conteudo">

					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<h2 className="title">Discover New Movies & TV Shows <a href="1" className="movies active">Movies</a> <a href="2" className="tvshow">TV Shows</a></h2>
							</div>
						</div>
					</div>
					
					<Filter />
					<MoviesList movies={this.state.movies} />
					<Pagination pagination={this.state.pagination} />

				</div>
				}
			</main>
		)
	}
}