import './header.styles.scss'
import CrownLogo from '../../assets/crown.svg'
import {Link} from 'react-router-dom'

export const Header = () => {
	return (
		<header>
			<Link to='/'>
				<img src={CrownLogo} alt="Logo da CRWN" to="/" />
			</Link>
			<nav>
				<Link to="">SHOP</Link>
				<Link to="">CONTACT</Link>
				<Link to="/sign-in">SIGN IN</Link>
			</nav>
		</header>
	)
}
