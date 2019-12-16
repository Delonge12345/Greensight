import React from 'react';
import './index.css';
import store, {subscribe} from"./redux/redux-store"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";








ReactDOM.render(
	<HashRouter>
		<Provider store = {store}>
			<App
				store={store}/>
		</Provider>
	</HashRouter>, document.getElementById('root'));








serviceWorker.unregister();
