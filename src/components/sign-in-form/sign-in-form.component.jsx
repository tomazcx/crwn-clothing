import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {useAuth} from "../../hooks/useAuth"
import {useFirebase} from "../../hooks/useFirebase"
import {Button, BUTTON_TYPE_CLASSES} from "../button/button.component"
import {Input} from "../input/input.component"
import {FormSignInButtons, FormSignInContainer, FormTitle, ErrorFeedback} from "./sign-in-form.styles"

export const SignInForm = () => {

	const defaultValues = {
		email: '',
		password: ''
	}

	const [formFields, setFormFields] = useState(defaultValues)
	const {login} = useAuth()
	const [error, setError] = useState('')
	const {createUserWithGooglePopup} = useFirebase()
	const navigate = useNavigate()


	const handleChange = (event) => {
		const {name, value} = event.target
		setFormFields(prevState => {return {...prevState, [name]: value}})
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		try {
			await login({email: formFields.email, password: formFields.password})
			navigate('/')
		} catch (err) {
			setError('Invalid credentials.')
		}
	}

	const logGoogleUser = async () => {
		await createUserWithGooglePopup()
		navigate('/')
	}


	return (
		<>
			<FormTitle>I already have an account</FormTitle>
			<span>Sign in with your email and password</span>
			<FormSignInContainer onSubmit={handleSubmit}>
				<Input name="email" label="email" type="email" id="email" onChange={handleChange} value={formFields.email} required />
				<Input name="password" label="password" type="password" id="password" onChange={handleChange} value={formFields.password} required />

				{error ? <ErrorFeedback>{error}</ErrorFeedback> : null}

				<FormSignInButtons>
					<Button type="submit">sign in</Button>
					<Button onClick={() => logGoogleUser()} type="button" buttonType={BUTTON_TYPE_CLASSES.google}>google sign in</Button>
				</FormSignInButtons>
			</FormSignInContainer>
		</>
	)

}
