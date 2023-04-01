import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
	default: 'default',
	google: 'google-sign-in',
	inverted: 'inverted'
}

export const Button = ({children, buttonType, ...rest}) => {
	return (
		<button className={BUTTON_TYPE_CLASSES[buttonType]} {...rest}>{children}</button>
	)
}
