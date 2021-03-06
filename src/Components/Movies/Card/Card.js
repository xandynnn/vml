import React, { Component } from 'react';

//
//  Styles
//
import './Card.less';

//
//  Component
//
import { Link } from 'react-router-dom';

//
//  Services
//
import Util from '~/Services/Util';

//
//  Plugins
//
import LazyLoad from 'react-lazy-load';

export default class Card extends Component{

    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            movie:{},
            favorite: false,
            watchList: false
        }
        this.handleChangeFavorite = this.handleChangeFavorite.bind(this);
        this.handleChangeWatchList = this.handleChangeWatchList.bind(this);
    }

    componentDidMount(){
        this.loadMovie();
    }

    loadMovie(){
        console.log(this.props.movie);
        this.setState({
            isLoading: false,
            movie: this.props.movie
        })
    }

    handleChangeFavorite(){
        this.setState({
            favorite: !this.state.favorite
        })
    }

    handleChangeWatchList(){
        this.setState({
            watchList: !this.state.watchList
        })
    }

    render(){
        let { title, release_date, vote_average, overview, poster_path, id, backdrop_path } = this.state.movie;
        return(
            <div className="col-xs-12 col-sm-6">
                { !this.state.isLoading && 
                <div className="card">
                    <div className="postImage">
                        <Link to={`/movie/${id}`}>
                        <LazyLoad height="270" width="180">
                            
                            <React.Fragment>
                            { !Util.isMobile() &&
                                <img srcSet={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path} 1x, https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path} 2x`} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}  alt={title} />
                            }
                            { Util.isMobile() &&
                                <img alt={title} srcSet={`https://image.tmdb.org/t/p/w500_and_h282_face${backdrop_path} 1x, https://image.tmdb.org/t/p/w1000_and_h563_face${backdrop_path} 2x`} src={`https://image.tmdb.org/t/p/w500_and_h282_face${backdrop_path}`} />
                            }
                            </React.Fragment>
                            

                        </LazyLoad>
                        </Link>
                        <div className="hoverBox">
                            <span className="popularity">
                                <span>Popularidade</span>
                            </span>
                            <span className={( this.state.watchList === true ) ? 'watchList active' : 'watchList' } onClick={this.handleChangeWatchList} >
                                <span>Adicionar na lista</span>
                            </span>
                            <span className={ ( this.state.favorite === true ) ? 'favorite active' : 'favorite' } onClick={this.handleChangeFavorite} >
                                <span>Favoritar</span>
                            </span>
                        </div>
                    </div>
                    <div className="postContent">
                        <div className="top">
                            <div data-val={Util.averageCalc(vote_average)} className={'rating ' +  Util.returnClassAverage(this.state.movie.vote_average) }><span>{Util.averageCalc(vote_average)}</span></div>
                            <div className="topHead">
                                <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
                                <p>{release_date}</p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="content">
                            <p>{Util.cutWords(overview)}</p>
                        </div>
                        <div className="footer">
                        <Link to={`/movie/${id}`}>More Info</Link>
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}