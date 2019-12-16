// /**
//  * Created by Максим on 08.12.2019.
//  */
// import React from 'react';
// const initialState = [
// 	coordinate = [
// 		{id:1,location:null,place:false},
// 		{id:2,location:null,place:false},
//
// 	]
//
// 	//
// 	// 	[55.976171, 37.148951],
// 	// [55.684758, 37.738521]
// ];
//
//
//
// export const mapReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case ADD_COORDINATE:
// 			return{
// 				...state,
// 				coordinate: state.coordinate.map(location => {
// 					if (location.id === action.newLocationId) {
// 						return {...location, place: true}
// 					}
// 					return location
// 				}),
// 			}
// 		case DELETE_COORDINATE:
// 			return {
// 				...state,
// 				coordinate: state.coordinate.map(location => {
// 					if (location.id === action.newLocationId) {
// 						return {...location, place: false}
// 					}
// 					return location
// 				}),
// 			}
// 		case SET_LOCATION:
// 			return {...state, location:action.location}
//
//
//
//
// 		default:
// 			return state;
// 	}
// }
//
//
//
// let ADD_COORDINATE = "ADD-COORDINATE";
// export const AddLocationIdActionCreator = (newLocationId) => ({type: ADD_COORDINATE,newLocationId})
//
// let DELETE_COORDINATE = "DELETE-COORDINATE";
// export const DeleteLocationIdActionCreator = (newLocationId) => ({type: DELETE_COORDINATE,newLocationId})
//
// let SET_LOCATION = "SET-LOCATION";
// export const SetLocationAC = (location)=>({type:SET_LOCATION},location)
