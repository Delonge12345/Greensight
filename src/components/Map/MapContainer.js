// /**
//  * Created by Максим on 08.12.2019.
//  */
// import React from 'react';
// import {connect} from "react-redux";
// import MapYand from "./MapYand";
// import {
//  AddLocationIdActionCreator, DeleteLocationIdActionCreator,
// 	SetLocationAC
// } from "../../redux/MapReducer";
// import CheckBoxForm1 from "../CheckBoxForm/CheckBoxForm1";
//
//
//
//
// const mapStateToProps=(state)=>{
// 	return {
// 		map:state.coordinate
// 	}
// }
//
// const mapDispatchToProps=(dispatch)=>{
// 	return {
//
//
//
// 		addNewLocation:(newLocation)=>{
// 			dispatch(AddLocationIdActionCreator(newLocation));
// 		},
// 		deleteNewLocation:(newLocation)=>{
// 			dispatch(DeleteLocationIdActionCreator(newLocation));
// 		},
//
// 		setNewLocation:(location)=>{
// 			dispatch(SetLocationAC(location));
// 		},
// 	}
// }
//
// const MapContainer = connect(mapStateToProps,mapDispatchToProps)(CheckBoxForm1);
//
// export default MapContainer;