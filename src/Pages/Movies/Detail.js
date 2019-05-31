import React, { Component } from 'react';

//
//	Componentes
//
import Header from '~/Pages/Includes/Header/Header';
import Footer from '~/Pages/Includes/Footer/Footer';
//import { Link } from 'react-router-dom';

//
//	Serviços
//
import api from '~/Services/Api';
import Util from '~/Services/Util';

//
//	Plugins
//
import LazyLoad from 'react-lazy-load';
import { ColorExtractor } from 'react-color-extractor';

//
//	Styles
//
import './Detail.less';

export default class Detail extends Component{

	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			movie: {},
			colors: []
		}
	}

	componentDidMount(){
		this.loadMovie(this.getMovieId());
	}

	getMovieId(){
		return this.props.match.params.id
	}

	loadMovie(id){
		api.getMovieById(id).then((res)=>{
			console.log(res.data);
			this.setState({
				isLoading: false,
				movie: res.data
			})
		})
	}

	render(){

		const movie = this.state.movie;
		const bgImage = 'http://image.tmdb.org/t/p/w1400_and_h450_face' + movie.backdrop_path;

		return(
			<div className="page">
	
				<Header />
				<main>
					{ !this.state.isLoading &&
					<div id="conteudo" class="detalhe">
						<ColorExtractor src={`${bgImage}`} getColors={ colors => this.setState({colors: colors}) } />
						<section className="banner">
							<div className="poster" style={{ backgroundImage: `url(${bgImage})` }}>
								<span className="overlay" style={{ backgroundColor: this.state.colors[0] }}></span>
								<div className="container">
									<div className="row">
										<div className="col-xs-12 col-md-4">
											<div className="posterImage">
												<LazyLoad>
													<img srcSet={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path} 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path} 2x`} sizes="auto" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt={movie.title} />
												</LazyLoad>
											</div>
										</div>
										<div className="col-xs-12 col-md-8">
											<div className="info">
												<h2>{movie.title} <span>({Util.getYear(movie.release_date)})</span></h2>
												<div className="boxRating">

												</div>

												{ movie.overview &&
													<div className="secItem">
														<h3>Overview</h3>
														<p>{movie.overview}</p>
													</div>
												}
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>


						<div className="container">
							<div className="row">
								<div className="col-xs-12">
									
									

								</div>
							</div>
						</div>
					</div>
					}
				</main>
				<Footer />
			</div>
		)
	}
}