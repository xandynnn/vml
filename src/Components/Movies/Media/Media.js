import React, { Component } from 'react';

//
//  Services
//
import api from '~/Services/Api';

//
//  Plugins
//
import LazyLoad from 'react-lazy-load';

//
//  Styles
//
import './Media.less';

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
                        <div className="lista">
                            <div className="links">
                                <a href="#popular">Most Popular</a>
                                <a href="#videos" className="active">Videos <span>{videos.results.length}</span></a>
                                <a href="#backdrops">Backdrops <span>10</span></a>
                                <a href="#posters">Posters <span>42</span></a>
                                <a className="viewAllVideos" href="#vielAllVideos">View all videos</a>
                            </div>
                        </div>
                    </div>
                    <div className="tabContent">
                        <div className="scrollBox">
                            {
                                videos.results
                                .map((video, idx)=>( 
                                <div key={idx} className="responsiveVideo">
                                    { video.site === "YouTube" &&
                                        <LazyLoad>
                                            <a class="videoThumb" rel="noopener noreferrer" target="_blank" href={`https://www.youtube.com/watch?v=${video.key}`}>
                                                <img src={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`} alt="" />
                                            </a>
                                        </LazyLoad>
                                    }
                                    { video.site === "Vimeo" &&
                                        <iframe title={video.name} src={`https://player.vimeo.com/video/${video.key}`} width="485" height="201" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
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