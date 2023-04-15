import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {collection, doc, writeBatch} from "firebase/firestore"
import {auth, db, signInWithGooglePopup} from "../utils/firebase/firebase-app.util"

export const useFirebase = () => {

	const createUserWithGooglePopup = async () => {
		return await signInWithGooglePopup()
	}

	const createUserWithCredentials = async (userData) => {
		const {email, password} = userData

		return await createUserWithEmailAndPassword(auth, email, password)
	}

	const onAuthStateChangedListener = (callback) => {
		return onAuthStateChanged(auth, callback)
	}

	const addColletionAndDocuments = async (collectionKey, objectsToAdd) => {
		const collectionRef = collection(db, collectionKey)
		const batch = writeBatch(db)

		objectsToAdd.forEach(object => {
			const docRef = doc(collectionRef, object.title.toLowerCase())
			batch.set(docRef, object)
		})

		await batch.commit()

		console.log('done')

	}

	return {createUserWithCredentials, createUserWithGooglePopup, onAuthStateChangedListener, addColletionAndDocuments}

}
