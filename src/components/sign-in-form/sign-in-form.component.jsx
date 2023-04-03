import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {useAuth} from "../../hooks/useAuth"
import {useFirebase} from "../../hooks/useFirebase"
import {Button} from "../button/button.component"
import {Input} from "../input/input.component"
import './sign-in-form.styles.scss'

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
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit} className="form-sign-in">
				<Input name="email" label="email" type="email" id="email" onChange={handleChange} value={formFields.email} required />
				<Input name="password" label="password" type="password" id="password" onChange={handleChange} value={formFields.password} required />

				{error ? <span className="error-feedback">{error}</span> : null}

				<div className="buttons-div">
					<Button type="submit" buttonType="default">sign in</Button>
					<Button onClick={() => logGoogleUser()} type="button" buttonType="google">google sign in</Button>
				</div>
			</form>
		</>
	)

}
