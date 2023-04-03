import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({
	cartItems: [],
	addProductToCartState: () => {},
	increaseProductQuantityFromCartState: () => {},
	decreaseProductQuantityFromCartState: () => {},
	removeProductFromCartState: () => {},
	cartValue: 0
})

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

export const CartProvider = ({children}) => {

	const [cartItems, setCartItems] = useState([])
	const [cartValue, setCartValue] = useState(0)

	useEffect(() => {
		const totalValue = cartItems.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0)
		setCartValue(totalValue)
	}, [cartItems])

	const addProductToCartState = (product) => {
		const cartList = addItemToCart(cartItems, product)

		setCartItems(cartList)
	}

	const increaseProductQuantityFromCartState = (idProduct) => {
		const cartList = increaseProductQuantity(idProduct, cartItems)

		setCartItems(cartList)
	}

	const decreaseProductQuantityFromCartState = (idProduct) => {
		const cartList = decreaseProductQuantity(idProduct, cartItems)

		setCartItems(cartList)
	}

	const removeProductFromCartState = (idProduct) => {
		const cartList = removeProduct(idProduct, cartItems)
		setCartItems(cartList)
	}


	return <CartContext.Provider value={{cartItems, addProductToCartState, increaseProductQuantityFromCartState, decreaseProductQuantityFromCartState, removeProductFromCartState, cartValue}}>{children}</CartContext.Provider>

}
