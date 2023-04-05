const INITIAL_STATE = {
	currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {

	const {type, payload} = action

	switch (type) {
		case 'user/SET_CURRENT_USER':
			return {
				...state,
				currentUser: payload
			}
		default:
			return state //since it can be an action of another reducer

	}
}



