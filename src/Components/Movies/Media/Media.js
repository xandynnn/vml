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
import './Media.less';

//
//  Plugins
//
import LazyLoad from 'react-lazy-load';

export default class Media extends Component{

    constructor(props){
		super(props);
		this.state = {
			isLoading: true,
            videos:[],
            movieid:0
		}
    }
    
    componentDidMount(){
        this.loadMedia(this.loadMovieId());
    }

    loadMovieId(){
        return this.props.movieid;
    }

    async loadMedia(movieId){

        await api.getVideos(movieId)
            .then((res)=>{
                console.log(res.data);
                this.setState({
                    isLoading: false,
                    videos: res.data,
                    movieid: movieId
                })
            })
            .catch(err=>console.log(err));
    }

    render(){
        const videos = this.state.videos;
        return(
            <div className="media">
                { !this.state.isLoading &&
                   <React.Fragment>
                    <div className="tabList">
                        <h2>Social</h2>
                        <a href="#popular">Most Popular</a>
                        <a href="#videos" className="active">Videos <span>{videos.results.length}</span></a>
                        <a href="#backdrops">Backdrops <span>10</span></a>
                        <a href="#posters">Posters <span>42</span></a>
                        <a className="viewAllVideos" href="#vielAllVideos">View all videos</a>
                    </div>
                    <div className="tabContent">
                        <div className="scrollBox">
                            {
                                videos.results
                                .map((video, idx)=>( 
                                <div key={idx} className="responsiveVideo">
                                    { video.site === "YouTube" &&
                                        <iframe title={video.name} width="485" height="201" src={`https://www.youtube.com/embed/${video.key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    }
                                    { video.site === "Vimeo" &&
                                        <iframe title={video.name} src={`https://player.vimeo.com/video/${video.key}`} width="485" height="201" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                    }
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