import React, { Component } from 'react';

//
//	Components
//
import Movies from './../Movies/Movies';

//
//	Componente Home
//
export default class Home extends Component{

	constructor(props){
		super(props)
		this.state = {
			isLoading: false
		}
	}

	//
	//	Mount App
	//
	componentDidMount(){

	}


	render() {
		return (<Movies />)
	}
}