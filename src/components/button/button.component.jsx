import {DefaultButton, InvertedButton, GoogleSignInButton} from './button.styles.jsx'

export const BUTTON_TYPE_CLASSES = {
	default: 'default',
	google: 'google-sign-in',
	inverted: 'inverted'
}

export const getButton = (buttonType = BUTTON_TYPE_CLASSES.default) => ({
	[BUTTON_TYPE_CLASSES.default]: DefaultButton,
	[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
	[BUTTON_TYPE_CLASSES.inverted]: InvertedButton
}[buttonType])

export const Button = ({children, buttonType, ...rest}) => {

	const CustomButton = getButton(buttonType)

	return <CustomButton  {...rest}>{children}</CustomButton>

}
