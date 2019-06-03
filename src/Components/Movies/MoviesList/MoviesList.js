import React, { Component } from 'react';

//
//  Component
//
import Card from '~/Components/Movies/Card/Card';

//
//  Styles
//
import './MoviesList.less';

export default class MoviesList extends Component{

    constructor(props){
		super(props);
		this.state = {
			isLoading: true,
            movies:[],
            pagination:{}
		}
	}

    componentDidMount(){

        //
        //  Get Movies
        //
        this.loadMovies();

    }

    //
    //  Get Movies
    //
    loadMovies(){
        
        this.setState({
            movies: this.props.movies,
            isLoading: false
        })
    }

    render(){
        return(
            <div className="resultList">
                <div className="container">
                    <div className="row">
                        { !this.state.isLoading &&
                            this.state.movies.map((movie, idx)=><Card movie={movie} key={idx} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}