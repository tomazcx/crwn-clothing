import './select-category.styles.scss'

export const SelectCategory = ({...rest}) => {

	return (
		<div className='select-filter-div'>
			<label htmlFor={rest.name}>Select category</label>
			<select {...rest}>
				<option value={0}>hats</option>
				<option value={1}>jackets</option>
				<option value={2}>sneakers</option>
				<option value={3}>womens</option>
				<option value={4}>mens</option>

			</select>
		</div>

	)

}
