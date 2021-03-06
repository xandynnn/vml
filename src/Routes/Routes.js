import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'

import Home from '~/Pages/Home/Home';
import Movies from '~/Pages/Movies/Movies';
import Detail from '~/Pages/Movies/Detail';
import Page404 from '~/Pages/Error/Page404';

const PageError = ({ location }) => (<Page404 route={location.pathname} />);

const Routes = () => (
	<div className="App">
		<BrowserRouter>
			<ScrollToTop>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/movies/' component={Movies} />
					<Route exact path='/movie/:id' component={Detail} />
					<Route component={PageError} />
				</Switch>
			</ScrollToTop>
		</BrowserRouter>
	</div>
);

export default Routes;