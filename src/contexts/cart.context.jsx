import {createContext, useEffect, useReducer, useState} from "react";

export const CartContext = createContext({
	cartItems: [],
	cartValue: 0,
	dispatch: () => {}
})

export const CART_ACTION_TYPES = {
	ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
	INCREASE_PRODUCT_QUANTITY: 'INCREASE_PRODUCT_QUANTITY',
	DECREASE_PRODUCT_QUANTITY: 'DECREASE_PRODUCT_QUANTITY',
	REMOVE_PRODUCT: 'REMOVE_PRODUCT',
	RETURN_TOTAL_VALUE: 'RETURN_TOTAL_VALUE'
}

const addItemToCart = (cartList, product) => {
	const result = cartList.find(cartProduct => cartProduct.id === product.id)

	if (!result) {
		return [...cartList, {...product, quantity: 1}]
	}

	const newCartList = cartList.map(cartProduct => cartProduct.id === product.id ? {...cartProduct, quantity: cartProduct.quantity + 1} : cartProduct)

	return newCartList
}

const increaseProductQuantity = (idProduct, cartList) => {

	const newCartList = cartList.map(cartProduct => cartProduct.id === idProduct ? {...cartProduct, quantity: cartProduct.quantity + 1} : cartProduct)
	return newCartList
}

const decreaseProductQuantity = (idProduct, cartList) => {
	const newCartList = cartList.map(cartProduct => cartProduct.id === idProduct && cartProduct.quantity > 1 ? {...cartProduct, quantity: cartProduct.quantity - 1} : cartProduct)
	return newCartList
}

const removeProduct = (idProduct, cartList) => {
	const newCartList = cartList.filter(cartProduct => cartProduct.id !== idProduct)
	return newCartList
}

const calculateTotalValue = (cartList) => {
	return cartList.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0)
}

const cartReducer = ({cartItems, cartValue}, action) => {

	const {type, payload} = action

	let newCart, newValue

	switch (type) {
		case 'ADD_ITEM_TO_CART':
			newCart = addItemToCart(cartItems, payload)
			return {
				cartItems: newCart,
				cartValue: cartValue
			}
		case 'INCREASE_PRODUCT_QUANTITY':
			newCart = increaseProductQuantity(payload.id, cartItems)
			return {
				cartItems: newCart,
				cartValue: cartValue
			}
		case 'DECREASE_PRODUCT_QUANTITY':
			newCart = decreaseProductQuantity(payload.id, cartItems)
			return {
				cartItems: newCart,
				cartValue: cartValue
			}
		case 'REMOVE_PRODUCT':
			newCart = removeProduct(payload.id, cartItems)
			return {
				cartItems: newCart,
				cartValue: cartValue
			}
		case 'RETURN_TOTAL_VALUE':
			newValue = calculateTotalValue(cartItems)
			return {
				cartItems: cartItems,
				cartValue: newValue
			}
		default:
			throw new Error(`Unhandled type ${type} in userReducer`)
	}



}

const INITIAL_STATE = {
	cartItems: [],
	cartValue: 0
}

export const CartProvider = ({children}) => {

	const [{cartItems, cartValue}, dispatch] = useReducer(cartReducer, INITIAL_STATE)

	useEffect(() => {
		dispatch({type: CART_ACTION_TYPES.RETURN_TOTAL_VALUE})
	}, [cartItems])

	return <CartContext.Provider value={{cartItems, cartValue, dispatch}}>{children}</CartContext.Provider>

}
