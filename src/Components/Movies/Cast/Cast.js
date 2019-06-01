import React, { Component } from 'react';

//
//  Components
//
import { Link } from 'react-router-dom';

//
//  Styles
//
import './Cast.less';

//
//  Plugins
//
import LazyLoad from 'react-lazy-load';

export default class Cast extends Component{

    constructor(props){
		super(props);
		this.state = {
			isLoading: true,
            cast:[],
            movieid:0
		}
    }
    
    componentDidMount(){
        this.loadCast();
    }

    loadCast(){
        this.setState({
            isLoading: false,
            cast: this.props.casts,
            movieid: this.props.movieid
        })
    }

    render(){
        return(
            <React.Fragment>
                { !this.state.isLoading &&
                    <div className="cast">
                        <section>
                            <h1>Top Billed Cast</h1>
                            <ul>
                                { 
                                    this.state.cast
                                    .filter((i, index) => (index < 5))
                                    .map((person, idx)=>(
                                        <li key={idx}>
                                           <div className="boxPerson">
                                            <Link to={`/person/${person.id}`}>
                                                    <LazyLoad>
                                                        <img 
                                                        srcSet={`https://image.tmdb.org/t/p/w138_and_h175_face${person.profile_path} 1x, https://image.tmdb.org/t/p/w276_and_h350_face${person.profile_path} 2x`}
                                                        src={`https://image.tmdb.org/t/p/w138_and_h175_face${person.profile_path}`}  alt={person.name} />
                                                    </LazyLoad>
                                                </Link>
                                                <p><Link to={`/person/${person.id}`}>{person.name}</Link></p>
                                                <p className="character">{person.character}</p>
                                           </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p><Link to={`/movie/${this.state.movieid}/cast`}>Full Cast & Crew</Link></p>
                        </section>
                    </div>
                }
            </React.Fragment>
        )
    }
}