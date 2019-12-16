/**
 * Created by Максим on 06.12.2019.
 */
import React, {Component} from 'react';
import style from './Radio.module.css';
import Button from "../Button/Button";
import MapYand from "../Map/MapYand";



class CheckBoxForm extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedOption: ''
		};
		this.radioChange = this.radioChange.bind(this);
	}

	radioChange(e) {
		this.setState({
			selectedOption: e.currentTarget.value
		});
	}

	render() {
		return (
			<form className={style.radioForm} onSubmit={this.props.handleSubmit}>
				<div className={style.radioContainer}>
					<div className={style.radioFirst}><input type="radio"
																									 value="PlaceFirst"
																									 checked={this.state.selectedOption === "PlaceFirst"}
																									 onChange={this.radioChange}/> Пункт выдачи заказов Песчаная ул., д.
						13
					</div>
					<div className={style.radioSecond}><input type="radio"
																										value="PlaceSecond"
																										checked={this.state.selectedOption === "PlaceSecond"}
																										onChange={this.radioChange}/> Пункт выдачи заказов Песчаная ул., д.
						13
					</div>
				</div>


				<div className={style.mapContainer}>
					<MapYand/>
				</div>
				<Button/>
			</form>
		);
	}
}
export default CheckBoxForm;















