import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export type CartItem = {
	id: number,
	price: number,
	name: string,
	imageUrl: string
	quantity: number
}

export type CartState = {
	cartItems: CartItem[]
}

const INITIAL_VALUE: CartState = {
	cartItems: [],
}

const addProductToList = (cartList: CartItem[], product: CartItem): CartItem[] => {
	const productFind = cartList.find(p => p.id === product.id)

	let newCartList = []
	if (!productFind) {
		newCartList = [...cartList, {...product}]
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

const removeProductFromList = (cartList: CartItem[], product: CartItem): CartItem[] => {

	const productFind = cartList.find(p => p.id === product.id)

	if (!productFind) {
		return cartList
	}

	let newCartList = []

	if (productFind.quantity > 1) {
		newCartList = cartList.map(p => p.id === product.id ? {...p, quantity: p.quantity -= 1} : p)
		return newCartList
	}

	newCartList = cartList.filter(p => p.id !== product.id)
	return newCartList

}

const clearProductFromList = (cartList: CartItem[], product: CartItem): CartItem[] => {
	const newCartList = cartList.filter(p => p.id !== product.id)
	return newCartList

}

export const cartSlice = createSlice({
	name: 'cart',
	initialState: INITIAL_VALUE,
	reducers: {
		addProductToCart(state, action: PayloadAction<CartItem>) {
			const newCartItems = addProductToList(state.cartItems, action.payload)
			state.cartItems = newCartItems
		},
		removeProductFromCart(state, action: PayloadAction<CartItem>) {
			const newCartItems = removeProductFromList(state.cartItems, action.payload)
			state.cartItems = newCartItems
		},
		clearProductFromCart(state, action: PayloadAction<CartItem>) {
			const newCartItems = clearProductFromList(state.cartItems, action.payload)
			state.cartItems = newCartItems
		}
	}
})

export const {addProductToCart, removeProductFromCart, clearProductFromCart} = cartSlice.actions

export const cartReducer = cartSlice.reducer
