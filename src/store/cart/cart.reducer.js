import {createSlice} from "@reduxjs/toolkit"

const INITIAL_VALUE = {
	cartItems: [],
}

const addProductToList = (cartList, product) => {
	const productFind = cartList.find(p => p.id === product.id)

	let newCartList = []
	if (!productFind) {
		newCartList = [...cartList, {...product, quantity: 1}]
		console.log(newCartList)
		return newCartList
	}

	newCartList = cartList.map(p => {
		if (p.id === product.id) {
			return {...p, quantity: p.quantity + 1}
		}

		return p
	})

	return newCartList
}

const removeProductFromList = (cartList, product) => {

	const productFind = cartList.find(p => p.id === product.id)

	let newCartList = []

	if (productFind.quantity > 1) {
		newCartList = cartList.map(p => p.id === product.id ? {...p, quantity: p.quantity -= 1} : p)
		return newCartList
	}

	newCartList = cartList.filter(p => p.id !== product.id)
	return newCartList

}

const clearProductFromList = (cartList, product) => {
	const newCartList = cartList.filter(p => p.id !== product.id)
	return newCartList

}

export const cartSlice = createSlice({
	name: 'cart',
	initialState: INITIAL_VALUE,
	reducers: {
		addProductToCart(state, action) {
			const newCartItems = addProductToList(state.cartItems, action.payload)
			state.cartItems = newCartItems
		},
		removeProductFromCart(state, action) {
			const newCartItems = removeProductFromList(state.cartItems, action.payload)
			state.cartItems = newCartItems
		},
		clearProductFromCart(state, action) {
			const newCartItems = clearProductFromList(state.cartItems, action.payload)
			state.cartItems = newCartItems
		}
	}
})

export const {addProductToCart, removeProductFromCart, clearProductFromCart} = cartSlice.actions

export const cartReducer = cartSlice.reducer
