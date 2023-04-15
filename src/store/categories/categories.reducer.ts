import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export type CategoryItem = {
	id: number
	imageUrl: string
	name: string
	price: number
}

export type Category = {
	title: string
	imageUrl: string
	items: CategoryItem[]
}

export type CategoryState = {
	readonly categoriesMap: Category[];
	readonly isLoading: boolean;
	readonly error: Error | null
}

export type CategoryMap = {
	[key: string]: CategoryItem[]
}

const INITIAL_VALUE: CategoryState = {
	categoriesMap: [],
	isLoading: false,
	error: null
}

const categorySlice = createSlice({
	name: 'categories',
	initialState: INITIAL_VALUE,
	reducers: {
		fetchCategoriesStart(state) {
			state.isLoading = true
		},
		fetchCategoriesSuccess(state, action: PayloadAction<Category[]>) {
			state.isLoading = false
			state.categoriesMap = action.payload
		},
		fetchCategoriesFailed(state, action: PayloadAction<Error>) {
			state.isLoading = false
			state.error = action.payload
		}
	}
})

export const {fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed} = categorySlice.actions
export const categoriesReducer = categorySlice.reducer
