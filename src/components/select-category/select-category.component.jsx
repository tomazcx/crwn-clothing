import {SelectCategoryField, SelectCategoryContainer} from "./select-category.styles"

export const SelectCategory = ({...rest}) => {

	return (
		<SelectCategoryContainer>
			<label htmlFor={rest.name}>Select category</label>
			<SelectCategoryField {...rest}>
				<option value={0}>hats</option>
				<option value={1}>jackets</option>
				<option value={2}>sneakers</option>
				<option value={3}>womens</option>
				<option value={4}>mens</option>

			</SelectCategoryField>
		</SelectCategoryContainer>

	)

}
