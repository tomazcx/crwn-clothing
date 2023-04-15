import {createSelector} from "reselect"
import {RootState} from "../store"
import {CategoryState, CategoryMap} from "./categories.reducer"

const selectCategoryReducer = (state: RootState): CategoryState => state.categories

export const selectCategories = createSelector(
	[selectCategoryReducer], //input selector
	(categorySlice) => categorySlice.categoriesMap //each argument is an element in the array of the input selector
)

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories): CategoryMap => categories.reduce((acc, category) => {
		console.log(category)
		const {title, items} = category
		acc[title.toLowerCase()] = items
		return acc
	}, {} as CategoryMap))

export const selectCategoriesIsLoading = createSelector(
	[selectCategoryReducer],
	categorySlice => categorySlice.isLoading
)


