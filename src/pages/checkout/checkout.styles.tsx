import styled from "styled-components";

const darkColor = "#505152"

export const CheckoutContainer = styled.main`
	width: 80%;
	margin: 2rem auto;
`
export const EmptyText = styled.p`
	font-size: 2.5rem;
	text-align: center;
	margin-top: 2rem;

`

export const CheckoutTable = styled.div`
	overflow: hidden;
`

export const CheckoutTableHead = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 2rem;
	align-items: center;
	place-content: center;
	padding-bottom: 1rem;
	border-bottom: 1px solid ${darkColor};
	color: ${darkColor};
`

export const PaymentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-top: 2rem;
	gap: 1rem;
`

export const TotalText = styled.span`
	font-size: 2rem;

`

