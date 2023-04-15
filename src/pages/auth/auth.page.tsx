import {SignUpForm} from '../../components/sign-up-form/sign-up-form.component'
import {SignInForm} from '../../components/sign-in-form/sign-in-form.component'
import {MainAuthContainer, SignContainer} from './auth.styles'

export const Auth = () => {

	return (
		<MainAuthContainer >
			<h1>Sign In</h1>
			<SignContainer>
				<div>
					<SignInForm />
				</div>
				<div>
					<SignUpForm />
				</div>
			</SignContainer>
		</MainAuthContainer >
	)
}
