import {createSlice} from "@reduxjs/toolkit"

const INITIAL_VALUE = {
	categoriesMap: [],
	isLoading: false,
	error: null
}

const categorySlice = createSlice({
	name: 'categories',
	initialState: INITIAL_VALUE,
	reducers: {
		fetchCategoriesStart(state, action) {
			state.isLoading = true
		},
		fetchCategoriesSuccess(state, action) {
			state.isLoading = false
			state.categoriesMap = action.payload
		},
		fetchCategoriesFailed(state, action) {
			state.isLoading = false
			state.error = action.payload
		}
	}
})

export const {fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed} = categorySlice.actions
export const categoriesReducer = categorySlice.reducer
