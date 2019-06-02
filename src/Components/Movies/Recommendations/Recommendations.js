import React, { Component } from 'react';

//
//  Components
//
import { Link } from 'react-router-dom';

//
//  Services
//
import api from '~/Services/Api';
import Util from '~/Services/Util';

//
//  Styles
//
import './Recommendations.less';

//
//  Plugins
//
import LazyLoad from 'react-lazy-load';

export default class Recommendations extends Component{

    constructor(props){
		super(props);
		this.state = {
			isLoading: true,
            recommendations:[],
            movieid:0
		}
    }
    
    componentDidMount(){
        this.loadRecommendations(this.loadMovieId());
    }

    loadMovieId(){
        return this.props.movieid;
    }

    loadRecommendations(movieId){
        api.getRecommendations(movieId)
            .then((res)=>{
                this.setState({
                    isLoading: false,
                    recommendations: res.data,
                    movieid: movieId
                })
            })
            .catch(err=>console.log(err));
    }

    render(){
        const recommendations = this.state.recommendations;
        return(
            <div className="recommendations">
                { !this.state.isLoading &&
                   <React.Fragment>
                    <div className="tabList">
                        <h2>Recommendations</h2>
                    </div>
                    <div className="tabContent">
                        <div className="scrollBox">
                            {
                                recommendations.results
                                .map((rec, idx)=>( 
                                <div key={idx} className="rec">
                                    <div className="image">
                                        <a href={`/movie/${rec.id}`} title={rec.title}>
                                            <LazyLoad>
                                                <img
                                                srcSet={`https://image.tmdb.org/t/p/w250_and_h141_face${rec.poster_path} 1x, https://image.tmdb.org/t/p/w250_and_h141_face${rec.poster_path} 2x`}
                                                src={`https://image.tmdb.org/t/p/w250_and_h141_face${rec.poster_path}`}  alt={rec.title} />
                                            </LazyLoad>
                                        </a>
                                    </div>
                                    <h2><span className="title"><Link to={`/movie/${rec.id}`}>{rec.title}</Link></span> <span className="rate">{Util.averageCalc(rec.vote_average, true)}</span></h2>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                   </React.Fragment>
                }
            </div>
        )
    }
}