import {Link} from "react-router-dom"
import styled from "styled-components"


export const BodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: rgba(255, 255, 255, .5);
	border: 1px solid black;
	padding: 1rem 3rem;
	max-width: 200px;
	gap: 1rem;
`


export const BackgroundImage = styled.div`
	height: 100%;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const CategoryContainer = styled(Link)`
	border: 1px solid black;
	min-width: 30%;
	flex: 1 1 auto;
	height: 360px;
	overflow: hidden;
	text-decoration: none;
	color: black;

	&:hover {
		cursor: pointer;
		
		&{CategoryContainerImage} {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		&{CategoryBodyContainer} {
			opacity: 0.9;
		}
	}

`

