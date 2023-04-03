import './header.styles.scss'
import CrownLogo from '../../assets/crown.svg'
import {Link, useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import {UserContext} from '../../contexts/user.context'
import {useAuth} from '../../hooks/useAuth'
import {CartDropdown} from '../cart-dropdown/cart-dropdown.component'

export const Header = () => {

	const {currentUser} = useContext(UserContext)
	const {logOut} = useAuth()
	const navigate = useNavigate()

	const signOutHandler = async () => {
		await logOut()
		navigate('/sign-in')
	}

	return (
		<header>
			<Link to='/'>
				<img src={CrownLogo} alt="Logo da CRWN" to="/" />
			</Link>
			<nav>
				<Link to="/shop">SHOP</Link>
				<Link to="">CONTACT</Link>
				{currentUser ? <Link onClick={signOutHandler}>SIGN OUT</Link> : <Link to="/sign-in" >SIGN IN</Link>}
				<CartDropdown />
			</nav>
		</header>
	)
}
