/**
 * Created by Максим on 05.12.2019.
 */
import React from 'react'
import style from './FormControl.module.css'



export const Input = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (

		<div className={style.formControl + " " + (hasError ? style.error : " ")}>
			<input {...input} {...props}/>
			{  hasError && <div className={style.textError}>{meta.error}</div> || meta.warn && <span>{meta.warn}</span>}
		</div>

	)
}


export const Textarea = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (

		<div className={style.formControl + " " + (hasError ? style.error : " ")}>
			<textarea {...input} {...props}/>
			{  hasError && <div className={style.textError}>{meta.error}</div> || meta.warn && <span>{meta.warn}</span>}
		</div>

	)
}
