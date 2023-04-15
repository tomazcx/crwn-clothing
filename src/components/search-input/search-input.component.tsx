import {MagnifyingGlass} from 'phosphor-react'
import {InputHTMLAttributes} from 'react'
import {InputSearchContainer, InputSearchField} from './search-input.styles'

export const SearchInput = ({...rest}: InputHTMLAttributes<HTMLInputElement>) => {

	return (
		<InputSearchContainer>
			<MagnifyingGlass size={24} />
			<InputSearchField {...rest} />
		</InputSearchContainer>

	)
}
