import styled from "styled-components";

export const BaseButton = styled.button`
	padding: 1rem 3rem;
	max-width: 15rem;
	transition: all 300ms ease;
	cursor: pointer;
	border: none;
	text-transform: uppercase;

	a{
		text-decoration: none;
	}

`

export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;

	&:hover{
		background-color: #357ae8;
	}

`

export const InvertedButton = styled(BaseButton)`

	color: #1c1c1c;
	background-color: white;
	border: 1px solid #1c1c1c;

	&:hover{
		background-color: #1c1c1c;
		color: white;

		a{
			color: white;
		}
	}

	a{
		color: #1c1c1c;
	}
`

export const DefaultButton = styled(BaseButton)`
	color: white;
	background-color: #1c1c1c;
	
	&:hover{
		background-color: white;
		border: 1px solid #1c1c1c;
		color: #1c1c1c;

		a{
			color: #1c1c1c;
		}
	}

	a{
		color: white;
	}
`
