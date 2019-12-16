/**
 * Created by Максим on 04.12.2019.
 */
import React from 'react';
import LoginForm from "../LoginForm/LoginForm";
import {reduxForm, reset} from "redux-form";
const Delivery = (props) => {
	return (
		<>
		<Login/>
		</>

	)
}

const afterSubmit = (result, dispatch) =>
	dispatch(reset('delivery'));


const LoginReduxForm = reduxForm({
	form: 'delivery',
	onSubmitSuccess: afterSubmit
})(LoginForm)

const Login = () => {
	const onSubmit = (formData) => {
		console.log(formData)
	}
	return <div>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>
}









export default Delivery;