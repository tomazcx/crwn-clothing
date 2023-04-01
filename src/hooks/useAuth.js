import {signInWithEmailAndPassword} from 'firebase/auth'
import {doc, getDoc, setDoc} from 'firebase/firestore'
import {auth, db} from '../utils/firebase/firebase-app.util'

export const useAuth = () => {

	const login = async (userData) => {
		const {email, password} = userData

		return await signInWithEmailAndPassword(auth, email, password)
	}

	const register = async (userData) => {

		const {uid, displayName, email} = userData

		const userDocRef = doc(db, 'users', uid)

		const userSnapshot = await getDoc(userDocRef)

		if (!userSnapshot.exists()) {
			await setDoc(userDocRef, {
				name: displayName,
				email,
				createdAt: new Date
			})
		}
	}


	return {login, register}


}

