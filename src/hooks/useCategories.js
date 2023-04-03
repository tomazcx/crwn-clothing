import {collection, getDocs, query} from "firebase/firestore"
import {db} from "../utils/firebase/firebase-app.util"

export const useCategories = () => {

	const getCategoriesAndDocuments = async () => {
		const collectionRef = collection(db, 'categories')
		const q = query(collectionRef)

		const querySnapshot = await getDocs(q)

		const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
			const {title, items} = docSnapshot.data()
			acc[title.toLowerCase()] = items
			return acc
		}, {})

		return categoryMap
	}

	return {getCategoriesAndDocuments}


}
