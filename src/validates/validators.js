export const required = value => {
	if(value)return undefined;


	return ' ';

}

export const phoneNumber = value =>
	value && !/^(0|[1-9][0-9]{9})$/i.test(value)
		? 'Некорректный номер, должно быть 10 цифр'
		: undefined



export const alphaNumeric = value =>
	value && !/^[а-яё -]+$/i.test(value)
		? 'Только кириллица'
		: undefined



const minLength = min => value =>
	value && value.length < min ? `Должно быть ${min} символов или больше` : undefined

export const minLength2 = minLength(2)

const maxLength = max => value =>
	value && value.length > max ? `Должно быть ${max} символов или меньше` : undefined

export const maxLength15 = maxLength(15)

export const maxLength50 = maxLength(50)