import styled from "styled-components";
import {InvertedButton} from "../button/button.styles";

export const ProductImage = styled.img`
	height: 500px;
	width: 100%;
	object-fit: cover;
	
`

export const ProductCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;
	cursor: pointer;

	${InvertedButton}{
		display: none;
		position: absolute;
		top: 70%;
		left: 50%;
		transform: translateX(-50%);
	}

	&:hover > ${InvertedButton}{
		display:block;
	}

	&:hover > ${ProductImage}{
		filter: brightness(50%);
	}

`

export const ProductCardTextContainer = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 24px;
`

