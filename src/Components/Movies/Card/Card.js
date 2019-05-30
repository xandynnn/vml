import React, { Component } from 'react';

//
//  Styles
//
import './Card.less';

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
            movie:{}
        }
    }

    componentDidMount(){
        this.loadMovie();
    }

    loadMovie(){
        //console.log(this.props.movie)
        this.setState({
            isLoading: false,
            movie: this.props.movie
        })
    }

    render(){
        let { title, release_date, vote_average, overview, poster_path } = this.state.movie;
        return(
            <div className="col-xs-12 col-md-6">
                { !this.state.isLoading && 
                <div className="card">
                    <div className="postImage">
                        <LazyLoad height="270" width="180">
                            <a href="a">
                                <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+poster_path} alt="" />
                            </a>
                        </LazyLoad>
                        <div className="hoverBox">
                            <span className="popularity">
                                <span>Popularidade</span>
                            </span>
                            <span className="favorite">
                                <span>Favoritar</span>
                            </span>
                            <span className="watchList">
                                <span>Adicionar na lista</span>
                            </span>
                        </div>
                    </div>
                    <div className="postContent">
                       <div className="top">
                            <div data-val={Util.averageCalc(vote_average)} className={'rating ' +  Util.returnClassAverage(this.state.movie.vote_average) }><span>{Util.averageCalc(vote_average)}</span></div>
                            <div className="topHead">
                                <h2><a href="1">{title}</a></h2>
                                <p>{release_date}</p>
                            </div>
                       </div>
                       <div className="clearfix"></div>
                       <div className="content">
                           <p>{Util.cutWords(overview)}</p>
                       </div>
                       <div className="footer">
                           <a href="1">More Info</a>
                       </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}