import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './../Pages/Home/Home';
import Movies from './../Pages/Movies/Movies';

const Routes = () => (
	<div className="App">
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/movies/:page' component={Movies} />
				<Route exact path='/movies' component={Home} />
				{/* 
				<Route exact path='/movie/:slug' component={Movie} />
				<Route component={Page404} /> */}
			</Switch>
		</BrowserRouter>
	</div>
);

export default Routes;