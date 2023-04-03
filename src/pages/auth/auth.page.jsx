import './auth.styles.scss'
import {SignUpForm} from '../../components/sign-up-form/sign-up-form.component'
import {SignInForm} from '../../components/sign-in-form/sign-in-form.component'

export const Auth = () => {


	return (
		<main className='main-auth-container' >
			<h1>Sign In</h1>
			<section className='sign-in-container'>
				<div>
					<SignInForm />
				</div>
				<div>
					<SignUpForm />
				</div>
			</section>
		</main >
	)
}
