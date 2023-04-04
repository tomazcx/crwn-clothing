import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`

export const NavContainer = styled.nav`
	display: flex;
	align-items: center;
	gap: 5rem;
`

export const NavLink = styled(Link)`
	text-decoration: none;
	color: #333333;
	font-size: 1.3rem;
	cursor:pointer;

	&:hover{
		color: black;
		transition: color .5s ease -in;
	}
`


