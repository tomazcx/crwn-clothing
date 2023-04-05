const INITIAL_VALUE = {
	categoriesMap: []
}

export const categoriesReducer = (state = INITIAL_VALUE, action) => {

	const {type, payload} = action

	switch (type) {
		case 'categories/SET_CATEGORIES':
			return {
				...state,
				categoriesMap: payload
			}
		default:
			return state

	}

}
