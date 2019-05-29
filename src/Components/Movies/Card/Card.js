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
            movie:{}
        }
    }

    componentDidMount(){
        this.loadMovie();
    }

    loadMovie(){
        console.log(this.props.movie)
        this.setState({
            movie: this.props.movie
        })
    }

    render(){
        let { title, release_date, vote_average, overview, poster_path } = this.state.movie;
        return(
            <div className="col-xs-12 col-md-6">
                <div className="card">
                    <div className="postImage">
                        <LazyLoad height="270">
                            <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+poster_path} alt="" />
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
                           <div className="rating">{vote_average}</div>
                           <h2>{title}</h2>
                           <p>{release_date}</p>
                       </div>
                       <div className="content">
                           <p>{Util.cutWords(overview)}</p>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}