import {createContext, useEffect, useState, useReducer} from "react";
import {useAuth} from "../hooks/useAuth";
import {useFirebase} from "../hooks/useFirebase";
import {createAction} from "../utils/reducer/create-action.utils";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
	SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {

	const {type, payload} = action

	switch (type) {
		case 'SET_CURRENT_USER':
			return {
				currentUser: payload
			}
		default:
			throw new Error(`Unhandled type ${type} in userReducer`)

	}

}

const INITIAL_STATE = {
	currentUser: null
}

export const UserProvider = ({children}) => {

	const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
	const {register} = useAuth()
	const {onAuthStateChangedListener} = useFirebase()

	const setCurrentUser = (user) => {
		dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, {user}))
	}

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
