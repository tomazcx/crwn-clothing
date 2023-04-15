import {InputHTMLAttributes} from "react"
import {FormInputLabel, FormInput, FormInputContainer} from "./input.styles"

type Input = {
	label: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({label, ...rest}: Input) => {

	return (
		<FormInputContainer>
			<FormInput {...rest} />
			<FormInputLabel htmlFor={rest.name} shrink={!rest.value ? false : (rest.value as string).length > 0}>{label}</FormInputLabel>
		</FormInputContainer>
	)
}
