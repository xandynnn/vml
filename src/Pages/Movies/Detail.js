import React, { Component } from 'react';

//
//	Componentes
//
import Header from '~/Pages/Includes/Header/Header';
import Footer from '~/Pages/Includes/Footer/Footer';
import { Link } from 'react-router-dom';
import Cast from '~/Components/Movies/Cast/Cast';
import Social from '~/Components/Movies/Social/Social';
import Media from '~/Components/Movies/Media/Media';
import Recommendations from '~/Components/Movies/Recommendations/Recommendations';
import Sideinfo from '~/Components/Movies/Sideinfo/Sideinfo';

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
			colors: [],
			crew:[],
			cast:[]
		}
	}

	componentDidMount(){
		this.loadMovie(this.getMovieId());
		this.loadCredits(this.getMovieId());
	}

	getMovieId(){
		return this.props.match.params.id
	}

	loadMovie(id){
		api.getMovieById(id).then((res)=>{
			this.setState({
				isLoading: false,
				movie: res.data
			})
		})
	}

	loadCredits(id){
		this.setState({isLoading:true})
		api.getCredits(id).then((res)=>{
			this.setState({
				isLoading: false,
				crew: res.data.crew,
				cast: res.data.cast
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
					<div id="conteudo" className="detalhe">
						
						<ColorExtractor src={`${bgImage}`} getColors={ colors => this.setState({colors: colors}) } />
						
						<section className="banner">
							<div className="poster" style={{ backgroundImage: `url(${bgImage})` }}>
								<span className="overlay" style={{ backgroundColor: this.state.colors[0] }}></span>
								<div className="container">
									<div className="row">
										<div className="col-xs-12 col-md-4">
											<div className="posterImage">
												<LazyLoad>
													<a href="#image">
														<span>Expand</span>
														<img srcSet={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path} 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path} 2x`} sizes="auto" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt={movie.title} />
													</a>
												</LazyLoad>
											</div>
										</div>
										<div className="col-xs-12 col-md-8">
											<div className="info">
												<h2>{movie.title} <span>({Util.getYear(movie.release_date)})</span></h2>
												
												<div className="boxRating">
													<div data-val={Util.averageCalc(movie.vote_average)} className={'rating ' +  Util.returnClassAverage(movie.vote_average) }>
														<span>{Util.averageCalc(movie.vote_average)}</span>
													</div>

													<a className="list" href="#addList" style={{ backgroundColor: this.state.colors[0], '--hover-color': this.state.colors[0] }} title="Login to create and edit custom lists">
														<span>Create and edit custom lists</span>
													</a>
													<a className="favorite" href="#addFavorite" style={{ backgroundColor: this.state.colors[0], '--hover-color': this.state.colors[0] }} title="Login to add this movie to your favorite list">
														<span>Add this movie to your favorite list</span>
													</a>
													<a className="watchlist" href="#addWatchList" style={{ backgroundColor: this.state.colors[0], '--hover-color': this.state.colors[0] }} title="Login to add this movie to your watchlist">
														<span>Add this movie to your watchlist</span>
													</a>
													<a className="rate" href="#rate" style={{ backgroundColor: this.state.colors[0], '--hover-color': this.state.colors[0] }} title="Login to rate this movie">
														<span>Rate this movie</span>
													</a>
													<a className="playTrailer" href="#playTrailer">Play Trailer</a>
												</div>

												{ movie.overview &&
													<div className="secItem">
														<h3>Overview</h3>
														<p>{movie.overview}</p>
													</div>
												}

												{ this.state.crew &&
													<div className="secItem">
														<h3>Featured Crew</h3>
														<div className="row">
															{ 
																Util.getUnique(this.state.crew, "name")
																.filter((person) =>{
																	return person.job === "Directing" || person.department === "Writing"
																})
																.map((person, idx)=>(
																	<div key={idx} className="col-xs-12 col-md-4 crew">
																		<h4><Link to={`/person/${person.id}`}>{person.name}</Link></h4>
																		<p>{person.job}</p>
																	</div>
																))
															}
														</div>
													</div>
												}

											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section className="detailMenu">
							<div className="container">
								<div className="row">
									<div className="col-xs-12">
										<ul className="menu">
											<li>
												<Link to="/movie/420817-aladdin/discuss" title="Discussions">Discussions</Link>
											</li>
											<li><Link to="/movie/420817-aladdin/reviews" title="Reviews">Reviews</Link></li>
											<li><Link to="/movie/420817-aladdin/videos" title="Videos">Videos</Link></li>
											<li><Link to="/movie/420817-aladdin/images/posters" title="Images">Images</Link></li>
											<li><Link to="/movie/420817-aladdin/changes" title="Changes">Changes</Link></li>
											<li><Link to="#1" title="Report">Report</Link></li>
											<li><Link to="#2" title="Share">Share</Link></li>
										</ul>
									</div>
								</div>
							</div>
						</section>
						
						<div className="division">
							<div className="container">
								<div className="row">
									<div className="col-xs-12 col-md-9 contentbar">
										
										{ this.state.cast.length &&
											<Cast casts={this.state.cast} movieid={this.state.movie.id} />
										}

										<Social movieid={this.state.movie.id} />

										<Media movieid={this.state.movie.id} />

										<Recommendations movieid={this.state.movie.id} />
				
									</div>
									<div className="col-xs-12 col-md-3 sidebar">
										
										<Sideinfo info={this.state.movie} />

									</div>
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