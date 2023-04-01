import './input.styles.scss'

export const Input = ({label, changeHandler, ...rest}) => {

	return (
		<div className='input-div'>
			<input {...rest} />
			<label htmlFor={rest.name} className={rest.value.length > 0 ? "shrink" : ""}>{label}</label>
		</div>
	)
}
