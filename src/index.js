import React from 'react';
import './index.css';
import store, {subscribe} from"./redux/redux-store"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";








ReactDOM.render(
	<BrowserRouter>
		<Provider store = {store}>
			<App
				store={store}/>
		</Provider>
	</BrowserRouter>, document.getElementById('root'));








serviceWorker.unregister();
