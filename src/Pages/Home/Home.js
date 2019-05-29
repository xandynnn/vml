import React, { Component } from 'react';

//
//	Components
//
import Header from './../Includes/Header/Header';
import Footer from './../Includes/Footer/Footer';
import Movies from './../Movies/Movies';

//
//	Serviços
//
//import api from '../../Services/Api';

//
//	Plugins
//
//import LazyLoad from 'react-lazyload';

//
//	Componente Home
//
export default class Home extends Component{

	constructor(props){
		super(props)
		this.state = {
			isLoading: false,
			movies: []
		}
	}

	//
	//	Mount App
	//
	componentDidMount(){

	}


	render() {

		return (
			<div className="page">

				<Header />
					<Movies />
				<Footer />

			</div>
		)
	}
}