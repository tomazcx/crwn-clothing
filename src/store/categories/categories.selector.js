import {createSelector} from "reselect"

const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
	[selectCategoryReducer], //input selector
	(categorySlice) => categorySlice.categoriesMap //each argument is an element in the array of the input selector
)

export const selectCategoriesMap = createSelector(
	[selectCategories],
	categories => categories.reduce((acc, category) => {
		const {title, items} = category
		acc[title.toLowerCase()] = items
		return acc
	}, {}))

export const selectCategoriesIsLoading = createSelector(
	[selectCategoryReducer],
	categorySlice => categorySlice.isLoading
)


