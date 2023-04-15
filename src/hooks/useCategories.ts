import {collection, getDocs, query} from "firebase/firestore"
import {db} from "../utils/firebase/firebase-app.util"

export const useCategories = () => {

	const getCategoriesAndDocuments = async () => {
		const collectionRef = collection(db, 'categories')
		const q = query(collectionRef)

		const querySnapshot = await getDocs(q)

		return querySnapshot.docs.map(docSnapshot => docSnapshot.data())

	}

	return {getCategoriesAndDocuments}


}
