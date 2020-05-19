import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ListFilm from './containers/listMovies/listFilm';
import Info from './containers/info/info';
import './index.css';

function App() {
	return (
		<Router>
		 	<Header />
		 	<Switch>
		 		<Route path="/" exact component={ ListFilm } />
		 		<Route path="/info" exact component={ Info } />
		 	</Switch>
			<Footer />
		 </Router>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));