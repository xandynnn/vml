import React, { Component } from 'react';

//
//	Componentes
//
import Header from '~/Pages/Includes/Header/Header';
import Footer from '~/Pages/Includes/Footer/Footer';
import { Link } from 'react-router-dom';

//
//	Styles
//
import './Page404.less';

export default class Page404 extends Component {

	constructor(props){
		super(props);
		this.state = {
			isLoading: false,
			route:''
		}
	}

	componentDidMount(){
		this.getRouteParam()
	}
	
	getRouteParam(){
		this.setState({
			route: this.props.route
		})
	}

	render(){
		return(
			<div className="page">
				<Header />
				<main>
					{ !this.state.isLoading &&
					<div id="conteudo">
						<div className="container">
							<div className="row">
								<div className="col-xs-12">
									<div className="errorPage">
										<h1>Oops!—We can't find the page ( <code>{this.state.route}</code> ) you're looking for.</h1>
										<p>You tried to request a page that doesn't seem to exist. If you believe this to be in error, let us know on the forums.</p>
										<p>You can <Link to={'/movies/'}>go back to the list</Link>.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					}
				</main>
				<Footer />
			</div>
		)
	}

}