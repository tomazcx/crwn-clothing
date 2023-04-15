import {ButtonHTMLAttributes} from 'react'
import {DefaultButton, InvertedButton, GoogleSignInButton} from './button.styles.jsx'

export enum BUTTON_TYPE_ENUM {
	default = 'default',
	google = 'google-sign-in',
	inverted = 'inverted'
}

export const getButton = (buttonType: BUTTON_TYPE_ENUM | undefined): typeof DefaultButton | typeof GoogleSignInButton | typeof InvertedButton => ({
	[BUTTON_TYPE_ENUM.default]: DefaultButton,
	[BUTTON_TYPE_ENUM.google]: GoogleSignInButton,
	[BUTTON_TYPE_ENUM.inverted]: InvertedButton
}[buttonType ?? 'default'])

type Button = {
	children: React.ReactNode,
	buttonType?: BUTTON_TYPE_ENUM
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, buttonType, ...rest}: Button) => {

	const CustomButton = getButton(buttonType)

	return <CustomButton  {...rest}>{children}</CustomButton>

}
