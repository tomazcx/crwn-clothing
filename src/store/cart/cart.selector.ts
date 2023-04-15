import {createSelector} from "reselect"
import {RootState} from "../store"
import {CartItem, CartState} from "./cart.reducer"

const selectCartReducer = (state: RootState): CartState => state.cart

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart): CartItem[] => cart.cartItems
)

export const selectCartCount = createSelector(
	[selectCartItems],
	(cartItems): number => cartItems.reduce((accumulator: number, product) => accumulator + product.quantity, 0)
)

export const selectCartValue = createSelector(
	[selectCartItems],
	(cartItems): number => cartItems.reduce((accumulator: number, product) => accumulator + product.quantity * product.price, 0)

)

