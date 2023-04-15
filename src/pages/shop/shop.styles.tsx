import styled from "styled-components";
import ReactLoading from 'react-loading';

export const MainShopContainer = styled.main`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 2rem;
`

export const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const FilterForm = styled.form`
	display: flex;
	align-items: center;
	gap: 1rem;
`

export const ProductsContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 2rem;
	row-gap: 3rem;
`

export const LoadingIcon = styled(ReactLoading)`
	grid-column: span 4 / span 4;
	margin: 2rem auto;
`
