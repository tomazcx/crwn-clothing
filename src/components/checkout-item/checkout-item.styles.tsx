import styled from "styled-components";
import {X} from 'phosphor-react'

export const CheckoutItemContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 2rem;
	border-bottom: 1px solid #2b2b2b;
	padding: 1rem 0;
`

export const CheckoutItemColumn = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.3rem;

	img{
		width: 200px;
	}
`

export const RemoveProduct = styled(X)`
	cursor:pointer;

	&:hover{
		color:grey;
	}
`



