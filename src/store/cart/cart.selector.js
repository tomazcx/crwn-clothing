import {createSelector} from "reselect"

const selectCartReducer = state => state.cart

export const selectCartItems = createSelector(
	[selectCartReducer],
	cart => cart.cartItems
)

export const selectCartCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((accumulator, product) => accumulator + product.quantity, 0)
)

export const selectCartValue = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0)

)

