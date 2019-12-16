/**
 * Created by Максим on 04.12.2019.
 */
import React, { Component } from 'react';
import MapYand from "../Map/MapYand";
import CheckBoxForm from "../CheckBoxForm/CheckBoxForm";
import {reduxForm,reset} from "redux-form";
import style from './Pickup.module.css'





const Pickup = () => {
	return <>
	<div className={style.pickUpContainer}>
		<div className={style.checkboxContainer}><Check />
		</div>
	</div>


	</>
}

const afterSubmit = (result, dispatch) =>
	dispatch(reset('pickup'));



const CheckBoxReduxForm = reduxForm({
	form:'pickup',
	onSubmitSuccess: afterSubmit
})(CheckBoxForm)

const Check = () => {
	const onSubmit = (formData)=>{

	}

	return <div>
		<CheckBoxReduxForm onSubmit={onSubmit}/>

	</div>




}


export default Pickup;


