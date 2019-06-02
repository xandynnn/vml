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
import './Social.less';

//
//  Plugins
//
import LazyLoad from 'react-lazy-load';

export default class Social extends Component{

    constructor(props){
		super(props);
		this.state = {
			isLoading: true,
            reviews:[],
            info:{},
            movieid:0
		}
    }
    
    componentDidMount(){
        this.loadReview(this.loadMovieId());
    }

    loadMovieId(){
        return this.props.movieid;
    }

    loadReview(movieId){

        api.getReviews(movieId)
            .then((res)=>{
                this.setState({
                    isLoading: false,
                    reviews: res.data.results,
                    info: res.data,
                    movieid: movieId
                })
            })
            .catch(err=>console.log(err));
    }

    render(){

        const review = this.state.reviews;
        const info = this.state.info;

        return(
            <div className="social">
                { !this.state.isLoading &&
                   <React.Fragment>
                    <div className="tabList">
                        <h2>Social</h2>
                        <a href="#reviews" className="active">Reviews <span>{info.total_results}</span></a>
                        <a href="#discussions">Discussions <span>4</span></a>
                    </div>
                    {
                        review
                        .reverse()
                        .filter((i, index) => (index < 1))
                        .map((review, idx)=>( 
                            <div key={idx} className="tabContent">
                                <div className="image">
                                    <Link to={`/u/Bertalt`}>
                                        <LazyLoad>
                                            <img src="https://pt.gravatar.com/avatar"  alt={review.author} />                  
                                        </LazyLoad>
                                    </Link>
                                </div>
                                <div className="content">
                                    <h3 data-rating="7.0"><Link to={`/review/${review.id}`}>A review by {review.author}</Link></h3>
                                    <p>Written by {review.author} on May 17, 2019</p>
                                    <div className="text">
                                        <p>{Util.cutWords(review.content, 450)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                   </React.Fragment>
                }
                <p><Link className="viewAll" to={`/movie/${this.state.movieid}/reviews`}>Read All Reviews</Link></p>
            </div>
        )
    }
}