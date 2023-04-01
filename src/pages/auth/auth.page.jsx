import './auth.styles.scss'
import {SignUpForm} from '../../components/sign-up-form/sign-up-form.component'
import {SignInForm} from '../../components/sign-in-form/sign-in-form.component'

export const Auth = () => {


	return (
		<main className='sign-in-container'>
			<section>
				<SignInForm />
			</section>
			<section>
				<SignUpForm />
			</section>
		</main >
	)
}
