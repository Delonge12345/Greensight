/**
 * Created by Максим on 04.12.2019.
 */
import React, {Component} from 'react';
import {YMaps, Map, Placemark, GeoObject, Clusterer} from "react-yandex-maps";
import points from "../common/Points/points";


const mapState = {
	center: [55.751574, 37.573856],
	zoom: 10,
	behaviors: ['default', 'scrollZoom']
};
class MapYand extends React.Component {
	state = {
		selectedPoint: null,
		locationCenterToFind: null
	};
	setCenterForSearch = ref => {
		ref.events.add("dragend", this.callback);
	};
	callback = e => {
		const {locationCenterToFind} = this.state;
		let coords = e.originalEvent.target.geometry._coordinates;
		let res = [coords[0], coords[1]];
		if (!locationCenterToFind) {
			this.setState({locationCenterToFind: res});
		}
		else if (
			coords[0] !== locationCenterToFind[0] && coords[1] !== locationCenterToFind[1]
		) {
			this.setState({locationCenterToFind: res});
		}
	};

	render() {
		console.log("render", this.state.locationCenterToFind);
		const {locationCenterToFind} = this.state;
		return (
			<div className="App">
				<YMaps>
					<Map style={{height: '500px', width: '100%'}} defaultState={mapState}>
						<GeoObject
							instanceRef={ref => ref && this.setCenterForSearch(ref)}
							defaultGeometry={{
								type: "Point",
								coordinates: mapState.center
							}}
							options={{
								preset: "islands#redCircleDotIcon",
								draggable: true
							}}
						/>
						<Clusterer
							options={{
								preset: "islands#invertedVioletClusterIcons",
								groupByCoordinates: false
							}}
						>
							{points.map((point, index) => (
								<Placemark key={index} geometry={point.coords}/>
							))}
						</Clusterer>
					</Map>
				</YMaps>
				{/*{locationCenterToFind && (*/}
				{/*<div>*/}
				{/*<h1>lat: {locationCenterToFind[0]}</h1>*/}
				{/*<h1>lon: {locationCenterToFind[1]}</h1>*/}
				{/*</div>*/}
				{/*)}*/}
			</div>
		);
	}
}
export default MapYand;