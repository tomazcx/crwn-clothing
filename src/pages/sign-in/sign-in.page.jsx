import './sign-in.styles.scss'
import {signInWithGooglePopup} from '../../utils/firebase/firebase-app.util'

export const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup()
		console.log(response)
	}

	return (
		<main>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>
				Sign in with Google Popup
			</button>

		</main >
	)
}
