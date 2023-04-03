import {createContext, useEffect, useState} from "react";
import {useAuth} from "../hooks/useAuth";
import {useFirebase} from "../hooks/useFirebase";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUse: () => null
})

export const UserProvider = ({children}) => {

	const [currentUser, setCurrentUser] = useState(null)
	const {logOut, register} = useAuth()
	const {onAuthStateChangedListener} = useFirebase()

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				register(user) //will only return the doc refference in case already registered
			}

			setCurrentUser(user)

		})

		return unsubscribe
	}, [])

	return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>

}
