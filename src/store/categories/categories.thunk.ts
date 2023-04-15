import {fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess} from "./categories.reducer"
import {useCategories} from '../../hooks/useCategories'
import {AppDispatch} from "../store"

const {getCategoriesAndDocuments} = useCategories()

export const fetchCategoriesAsync = () => async (dispatch: AppDispatch) => {
	dispatch(fetchCategoriesStart())

	try {
		const categories = await getCategoriesAndDocuments()
		dispatch(fetchCategoriesSuccess(categories))
	} catch (err) {
		dispatch(fetchCategoriesFailed(err))
	}
}
