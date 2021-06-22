import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage.jsx';
import Home from './views/Home/Home';
import Breed from './views/Breed/Breed';
import About from './views/About/About';
import NavBar from './components/NavBar/NavBar';
import Create from './views/Create/Create';

function App() {
	const [input, setInput] = useState('');
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' exact component={LandingPage} />
				<Route path='/'>
					<NavBar input={input} setInput={setInput} />
					<Route exact path='/home' render={() => <Home input={input} setInput={setInput} />} />
					<Route exact path='/home/:id' exact component={Breed} />
					<Route exact path='/about_us' exact component={About} />
					<Route exact path='/create' exact component={Create} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
