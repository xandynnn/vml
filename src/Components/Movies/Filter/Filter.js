import React, { Component } from 'react';

//
//  Styles
//
import './Filter.less';

//
//  API
//
import api from '~/Services/Api';

export default class Filter extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            years: [...Array(this.getCurrentYear()+1).keys()],
            genres:[]
        }
    }

    componentDidMount(){
        this.loadGenres();
    }

    getCurrentYear(){
        var today = new Date();
        return today.getFullYear(); 
    }

    loadGenres(){
        api.getGenres()
            .then((res)=>{
                this.setState({
                    isLoading: false,
                    genres: res.data.genres
                })
            })
            .catch(err=>console.log(err))
    }

    render(){
        return(
            <div className="filtros">
                { !this.state.isLoading &&
                <form>
                    <fieldset>
                        <legend>Filtros</legend>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="year">Year</label>
                                        <span className="selectStyle">
                                            <select id="year" name="year" ref="year" defaultValue={this.getCurrentYear()+1}>
                                                { this.state.years
                                                    .reverse()
                                                    .filter((year)=>{
                                                        return year >= 1900
                                                    })
                                                    .map((year,idx)=>(
                                                    <option key={idx} value={year}>{year}</option>
                                                )) }
                                            </select>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="sortby">Sort By</label>
                                        <span className="selectStyle">
                                            <select id="sortby" name="sortby" ref="sortby" defaultValue="popularity.desc">
                                                <option value="popularity.desc">Popularity Descending</option>
                                                <option value="popularity.asc">Popularity Ascending</option>
                                                <option value="vote_average.desc">Rating Descending</option>
                                                <option value="vote_average.asc">Rating Ascending</option>
                                                <option value="primary_release_date.desc">Release Date Descending</option>
                                                <option value="primary_release_date.asc">Release Date Ascending</option>
                                                <option value="title.asc">Title (A-Z)</option>
                                                <option value="title.desc">Title (Z-A)</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="genres">Genres</label>
                                        <span className="selectStyle">
                                            <select id="genres" name="genres" ref="genres" defaultValue="popularity.desc">
                                                <option value="0">Genres</option>
                                                { this.state.genres
                                                    .map(( genre, idx )=>(
                                                        <option key={idx} value={genre.id}>{genre.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="keywords">Keywords</label>
                                        <input type="text" name="keywords" ref="keywords" id="keywords" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
                }
            </div>
        )
    }
}