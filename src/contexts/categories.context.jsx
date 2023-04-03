import {createContext, useEffect, useState} from "react";
import {useCategories} from "../hooks/useCategories";

export const CategoriesContext = createContext({
	categories: []
})

export const CategoriesProvider = ({children}) => {

	const [categories, setCategories] = useState({})
	const {getCategoriesAndDocuments} = useCategories()

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesMap = await getCategoriesAndDocuments()
			setCategories(categoriesMap)
		}
		getCategoriesMap()


	}, [])

	return <CategoriesContext.Provider value={{categories}}>{children}</CategoriesContext.Provider>

}
