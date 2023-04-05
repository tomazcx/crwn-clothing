import CrownLogo from '../../assets/crown.svg'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../hooks/useAuth'
import {CartDropdown} from '../cart-dropdown/cart-dropdown.component'
import {HeaderContainer, NavContainer, NavLink} from './header.styles'
import {useSelector} from 'react-redux'

export const Header = () => {

	const currentUser = useSelector(state => state.user.currentUser)
	const {logOut} = useAuth()
	const navigate = useNavigate()

	const signOutHandler = async () => {
		await logOut()
		navigate('/sign-in')
	}

	return (
		<HeaderContainer>
			<NavLink to='/'>
				<img src={CrownLogo} alt="Logo da CRWN" to="/" />
			</NavLink>
			<NavContainer>
				<NavLink to="/shop">SHOP</NavLink>
				{currentUser ? <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink> : <NavLink to="/sign-in" >SIGN IN</NavLink>}
				<CartDropdown />
			</NavContainer>
		</HeaderContainer>
	)
}
