import {createContext, useEffect, useReducer, useState} from "react";
import {createAction} from '../utils/reducer/create-action.utils'

export const CartContext = createContext({
	cartItems: [],
	cartCount: 0,
	cartValue: 0,
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	increaseProductQuantity: () => {},
	decreaseProductQuantity: () => {}
})


const cartReducer = (state, action) => {

	const {type, payload} = action
	console.log(payload)

	switch (type) {
		case 'SET_CART_ITEMS':
			return {
				...state,
				...payload
			}
		default:
			throw new Error(`Unhandled type ${type} in userReducer`)
	}

}

const INITIAL_STATE = {
	cartItems: [],
	cartCount: 0,
	cartValue: 0
}

export const CartProvider = ({children}) => {

	const [{cartItems, cartValue, cartCount}, dispatch] = useReducer(cartReducer, INITIAL_STATE)

	const updateCartItemsReducer = (newCartItems) => {
		const newCartValue = newCartItems.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0)
		const newCartCount = newCartItems.reduce((accumulator, product) => accumulator + product.quantity, 0)

		dispatch(createAction('SET_CART_ITEMS', {cartItems: newCartItems, cartValue: newCartValue, cartCount: newCartCount}))
	}

	const addItemToCart = (product) => {
		const result = cartItems.find(cartProduct => cartProduct.id === product.id)

		let newCartList = []

		if (!result) {
			newCartList = [...cartItems, {...product, quantity: 1}]
			return updateCartItemsReducer(newCartList)
		}

		newCartList = cartItems.map(cartProduct => cartProduct.id === product.id ? {...cartProduct, quantity: cartProduct.quantity + 1} : cartProduct)

		return updateCartItemsReducer(newCartList)
	}

	const increaseProductQuantity = (idProduct) => {
		const newCartList = cartItems.map(cartProduct => cartProduct.id === idProduct ? {...cartProduct, quantity: cartProduct.quantity + 1} : cartProduct)
		return updateCartItemsReducer(newCartList)
	}

	const decreaseProductQuantity = (idProduct) => {
		const newCartList = cartItems.map(cartProduct => cartProduct.id === idProduct && cartProduct.quantity > 1 ? {...cartProduct, quantity: cartProduct.quantity - 1} : cartProduct)
		return updateCartItemsReducer(newCartList)
	}

	const removeItemFromCart = (idProduct) => {
		const newCartList = cartItems.filter(cartProduct => cartProduct.id !== idProduct)
		return updateCartItemsReducer(newCartList)
	}


	const value = {
		addItemToCart,
		increaseProductQuantity,
		decreaseProductQuantity,
		removeItemFromCart,
		cartItems,
		cartValue,
		cartCount
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}
