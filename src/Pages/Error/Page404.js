import React, { Component } from 'react';

//
//	Serviços
//

export default class Page404 extends Component {

	constructor(props){
		super(props);
		this.state = {
			isLoading: false,
		}
	}

	render(){
		return(
			<div className="page">

				<div className="container">

					<div className="row">
						<div className="col-xs-12">
                            <h2>Não foi encontrado resultados para <code>{location.pathname}</code></h2>
						</div>
					</div>
				</div>

			</div>
		)
	}

}