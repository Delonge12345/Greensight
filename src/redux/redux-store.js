/**
 * Created by Максим on 03.12.2019.
 */
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {mapReducer} from "./MapReducer";


let reducers = combineReducers({
	form:formReducer,
	map:mapReducer
})




let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;