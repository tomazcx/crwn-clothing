import {FormInputLabel, FormInput, FormInputContainer} from "./input.styles"

export const Input = ({label, changeHandler, ...rest}) => {

	return (
		<FormInputContainer>
			<FormInput {...rest} />
			<FormInputLabel htmlFor={rest.name} shrink={rest.value.length > 0}>{label}</FormInputLabel>
		</FormInputContainer>
	)
}
