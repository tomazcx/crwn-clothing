import {useState} from "react"
import {useAuth} from "../../hooks/useAuth"
import {useFirebase} from "../../hooks/useFirebase"
import {Button} from "../button/button.component"
import {Input} from "../input/input.component"
import './sign-up-form.styles.scss'



export const SignUpForm = () => {

	const defaultFormFields = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	}

	const [formFields, setFormFields] = useState(defaultFormFields)
	const [error, setError] = useState('')
	const {register} = useAuth()
	const {createUserWithCredentials} = useFirebase()

	const handleChange = (event) => {
		const {name, value} = event.target

		setFormFields(prevState => {return {...prevState, [name]: value}})
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (formFields.password !== formFields.confirmPassword) {
			setError('Passwords do not match')
			return
		}

		const userData = {
			email: formFields.email,
			password: formFields.password
		}


		try {
			const response = await createUserWithCredentials(userData)
			console.log(response)
			response.user = {...response.user, displayName: formFields.displayName}

			register(response.user)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit} className="sign-up-form">
				<Input label='Display Name' type="text" id="displayName" name="displayName" onChange={handleChange} value={formFields.displayName} required />
				<Input label='Email' type="email" id="email" name="email" onChange={handleChange} value={formFields.email} required />
				<Input label='Password' type="password" id="password" name="password" onChange={handleChange} value={formFields.password} required />
				<Input label='Confirm Password' type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} value={formFields.confirmPassword} required />
				<Button type="submit" buttonType='default' >sign up</Button>
			</form>
		</>
	)
}
