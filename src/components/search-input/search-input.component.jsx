import {MagnifyingGlass} from 'phosphor-react'
import './search-input.styles.scss'

export const SearchInput = ({...rest}) => {

	return (
		<div className='input-search-div'>
			<MagnifyingGlass size={24} />
			<input {...rest} />
		</div>

	)
}
