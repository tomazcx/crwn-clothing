import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth, signInWithGooglePopup} from "../utils/firebase/firebase-app.util"

export const useFirebase = () => {

	const createUserWithGooglePopup = async () => {
		return await signInWithGooglePopup()
	}

	const createUserWithCredentials = async (userData) => {
		const {email, password} = userData

		return await createUserWithEmailAndPassword(auth, email, password)
	}

	return {createUserWithCredentials, createUserWithGooglePopup}

}
