import {fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess} from "./categories.reducer"
import {useCategories} from '../../hooks/useCategories'

const {getCategoriesAndDocuments} = useCategories()

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart())

	try {
		const categories = await getCategoriesAndDocuments()
		dispatch(fetchCategoriesSuccess(categories))
	} catch (err) {
		dispatch(fetchCategoriesFailed(err))
	}
}
