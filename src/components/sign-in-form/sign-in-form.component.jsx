import {useState} from "react"
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
	const {register, login} = useAuth()
	const {createUserWithGooglePopup} = useFirebase()

	const handleChange = (event) => {
		const {name, value} = event.target
		setFormFields(prevState => {return {...prevState, [name]: value}})
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		try {
			const response = await login({email: formFields.email, password: formFields.password})
			console.log(response)
		} catch (err) {
			console.log(err)
		}
	}

	const logGoogleUser = async () => {
		const response = await createUserWithGooglePopup()
		await register(response.user)
	}


	return (
		<>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit} className="form-sign-in">
				<Input name="email" label="email" type="email" id="email" onChange={handleChange} value={formFields.email} required />
				<Input name="password" label="password" type="password" id="password" onChange={handleChange} value={formFields.password} required />

				<div className="buttons-div">
					<Button type="submit" buttonType="default">sign in</Button>
					<Button onClick={() => logGoogleUser()} type="button" buttonType="google">google sign in</Button>
				</div>
			</form>
		</>
	)

}
