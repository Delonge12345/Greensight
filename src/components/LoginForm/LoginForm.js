/**
 * Created by Максим on 04.12.2019.
 */
import React from 'react';
import {Field} from "redux-form";
import style from './LoginForm.module.css'
import {alphaNumeric, maxLength15, minLength2, number, phoneNumber, required} from "../../validates/validators";
import {Input, Textarea} from "../common/FormsControls/FormsControls";
import {  createTextMask } from 'redux-form-input-masks';

const phoneMask = createTextMask({
	pattern: '(999) 999-9999',
});


const LoginForm = (props) => {
	return (
		<>
		<form className={style.loginForm} onSubmit={props.handleSubmit}>
			<div className={style.nameAndPhone}>
				<div>
					<h3>ФИО</h3>
					<Field className={style.name} placeholder="Фамилия Имя Отчество" name={"name"} component={Input}
								 validate={[required, maxLength15, minLength2,alphaNumeric]}



					/>
				</div>
				<div>
					<h3>Телефон</h3>

					< Field
						type="tel"
						className={style.phone}
						name={"phone"}
						validate={[required,phoneNumber]}
						component={Input}
						{...phoneMask}
					/>
				</div>
			</div>
			<div>
				<h3>Адрес доставки</h3>
				<Field className={style.adress} placeholder="Город , улица , дом" name={"adress"} component={Input}
							 validate={[required,alphaNumeric]}
				/>
			</div>
			<div>
				<h3>Комментарий</h3>
				<Field className={style.textArea} component={Textarea} name={"text"} validate={[required,alphaNumeric]}/>
			</div>

			<div className={style.buttonOrderPosition}>
				<button className={style.buttonOrder}>Оформить заказ</button>
			</div>
		</form>
		</>
	)
}
export default LoginForm;
