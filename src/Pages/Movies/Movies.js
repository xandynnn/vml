import React, { Component } from 'react';

//
//	Components
//
import MoviesList from '~/Components/Movies/MoviesList/MoviesList';
import Pagination from '~/Components/Pagination/Pagination';

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
								<h2>Discover New Movies & TV Shows <a href="1">Movies</a> <a href="2">TV Shows</a></h2>
							</div>
						</div>
					</div>
					
					<div className="filtros">
						<form>
							<fieldset>
								<legend>Filtros</legend>
								<div className="container">
									<div className="row">
										<div className="col-xs-12 col-md-2">
											<div className="form-group">
												<label htmlFor="year">Year</label>
												<select id="year" name="year" ref="year">
													<option>2019</option>
													<option>2018</option>
													<option>2017</option>
												</select>	
											</div>
										</div>
										<div className="col-xs-12 col-md-3">
											<div className="form-group">
												<label htmlFor="sortby">SortBy</label>
												<select id="sortby" name="sortby" ref="sortby">
													<option>2019</option>
													<option>2018</option>
													<option>2017</option>
												</select>	
											</div>
										</div>
										<div className="col-xs-12 col-md-3">
											<div className="form-group">
												<label htmlFor="genre">Genre</label>
												<input type="text" name="genre" ref="genre" id="genre" />	
											</div>
										</div>
										<div className="col-xs-12 col-md-3">
											<div className="form-group">
												<label htmlFor="keywords">Keywords</label>
												<input type="text" name="keywords" ref="keywords" id="keywords" />
											</div>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
					</div>

					<MoviesList movies={this.state.movies} pagination={this.state.pagination} />
					<Pagination pagination={this.state.pagination} />

				</div>
				}
			</main>
		)
	}
}