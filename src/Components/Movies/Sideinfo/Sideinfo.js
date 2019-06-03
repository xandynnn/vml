import React, { Component } from 'react';

//
//  Components
//
import { Link } from 'react-router-dom';

//
//  Plugins
//
import LazyLoad from 'react-lazy-load';

//
//  Services
//
import api from '~/Services/Api';

//
//  Styles
//
import './Sideinfo.less';

export default class Sideinfo extends Component{

    constructor(props){
		super(props);
		this.state = {
			isLoading: true,
            movie: {},
            keywords:[]
		}
    }
    
    componentDidMount(){
		this.loadMovie();
    }
    
    loadMovie(){
        api.getKeywords(this.props.info.id)
            .then((res)=>{
                this.setState({
                    isLoading: false,
                    movie: this.props.info,
                    keywords: res.data.keywords
                })
            })
            .catch(err=>console.log(err));
	}

    render(){
        return(
            <aside>
                { !this.state.isLoading &&
                <div className="sideBar">
                    <div className="socialShare">
                        <ul>
                            <li><a href="#1" className="facebook"><span>Facebook</span></a></li>
                            <li><a href="#2" className="twitter"><span>twitter</span></a></li>
                            <li><a href="#3" className="instagram"><span>instagram</span></a></li>
                            { this.state.movie.homepage && 
                            <li><a target="_blank" rel="noopener noreferrer" href={this.state.movie.homepage} className="website"><span>site</span></a></li>
                            }
                        </ul>
                    </div>

                    <div className="inform">
                        <h2>Facts</h2>
                    </div>

                    { this.state.movie.status &&
                    <div className="inform">
                        <h2>Status</h2>
                        <p>{this.state.movie.status}</p>
                    </div>
                    }

                    { this.state.movie.release_date &&
                    <div className="inform">
                        <h2>Release Information</h2>
                        {this.state.movie.release_date}
                    </div>
                    }

                    { this.state.movie.original_language &&
                    <div className="inform">
                        <h2>Original Language</h2>
                        {
                            this.state.movie.spoken_languages
                            .filter((lang)=>{
                                return lang.iso_639_1 === this.state.movie.original_language
                            })
                            .map((lang, idx) =>(
                                <p key={idx}>{lang.name}</p>
                            ))
                        }
                    </div>
                    }

                    { this.state.movie.runtime &&
                    <div className="inform">
                        <h2>Runtime</h2>
                        <p>{this.state.movie.runtime}</p>
                    </div>
                    }

                    { this.state.movie.budget && 
                    <div className="inform">
                        <h2>Budget</h2>
                        <p>{this.state.movie.budget}</p>
                    </div>
                    }
                    
                    { this.state.movie.revenue && 
                    <div className="inform">
                        <h2>Revenue</h2>
                        <p>{this.state.movie.revenue}</p>
                    </div>
                    }

                    { this.state.movie.genres &&
                        <div className="inform">
                            <h2>Genres</h2>
                            <ul className="genres">
                                {
                                    this.state.movie.genres
                                    .map((genre, idx)=>(
                                        <li key={idx}><Link to={`/genre/${genre.id}/movie`}>{genre.name}</Link></li>
                                    ))
                                }
                                
                            </ul>
                        </div>
                    }

                    { this.state.keywords &&
                    <div className="inform">
                        <h2>Keywords</h2>
                        <ul className="keywords">
                            { 
                                this.state.keywords
                                .map((keyword, idx)=>(
                                    <li key={idx}>
                                        <Link to={`/keyword/${keyword.id}/movie`}>
                                            {keyword.name}
                                        </Link>
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                    }

                    <div className="separator"></div>

                    <div className="inform">
                        <h2>Content Score</h2>
                        <div className="scoreBar">
                            100
                        </div>
                        <p className="score">Yes! Looking good!</p>
                    </div>

                    <div className="inform">
                        <h2>Top Contributors</h2>
                        <ul className="contributors">
                            <li>
                                <Link to={`/u/topkek`}>
                                    <div className="avatar">
                                        <LazyLoad>
                                            <img alt="TopKek" srcSet="https://image.tmdb.org/t/p/w45_and_h45_face/cNDCv5yGLucVYgpwWXOWEIE3KaH.jpg 1x, https://image.tmdb.org/t/p/w90_and_h90_face/cNDCv5yGLucVYgpwWXOWEIE3KaH.jpg 2x" src="https://image.tmdb.org/t/p/w45_and_h45_face/cNDCv5yGLucVYgpwWXOWEIE3KaH.jpg" />
                                        </LazyLoad>
                                    </div>
                                    <div className="moreInfo">
                                        <div className="point">78</div>
                                        <p>TopKek</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/u/zoulnix`}>
                                    <div className="avatar">
                                        <LazyLoad>
                                            <img alt="zoulnix" srcSet="https://image.tmdb.org/t/p/w45_and_h45_face/hT033TcldYigJ8ZtmuxVQLRafkE.jpg 1x, https://image.tmdb.org/t/p/w90_and_h90_face/hT033TcldYigJ8ZtmuxVQLRafkE.jpg 2x" src="https://image.tmdb.org/t/p/w45_and_h45_face/hT033TcldYigJ8ZtmuxVQLRafkE.jpg" />
                                        </LazyLoad>
                                    </div>
                                    <div className="moreInfo">
                                        <div className="point">56</div>
                                        <p>zoulnix</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/u/fantrashalert`}>
                                    <div className="avatar">
                                        <LazyLoad>
                                        <img alt="fantrashalert" srcSet="https://secure.gravatar.com/avatar/0d113a9457fa36106cd7b08e3a5cc172.jpg?s=45 1x, https://secure.gravatar.com/avatar/0d113a9457fa36106cd7b08e3a5cc172.jpg?s=90 2x" src="https://secure.gravatar.com/avatar/0d113a9457fa36106cd7b08e3a5cc172.jpg?s=45" />
                                        </LazyLoad>
                                    </div>
                                    <div className="moreInfo">
                                        <div className="point">27</div>
                                        <p>fantrashalert</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <p><Link className="contributorsLink" to={`/movie//447404/changes/`}>View Edit History</Link></p>
                    </div>

                    <div className="inform">
                        <h2>Popularity Trend</h2>
                        <img src="~/../../assets/images/example-popularity.png" alt="Popularity" />
                    </div>

                    <Link className="login" to={`/login/`}>Login to edit</Link>
                    <div className="clearfix"></div>
                    <p><a className="shortcut" href="#KeyboardShortcuts">Keyboard Shortcuts</a></p>
                    
                </div>
                }
            </aside>
        )
    }
}