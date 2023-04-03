import {MagnifyingGlass} from 'phosphor-react'
import {InputSearchContainer, InputSearchField} from './search-input.styles'

export const SearchInput = ({...rest}) => {

	return (
		<InputSearchContainer>
			<MagnifyingGlass size={24} />
			<InputSearchField {...rest} />
		</InputSearchContainer>

	)
}
