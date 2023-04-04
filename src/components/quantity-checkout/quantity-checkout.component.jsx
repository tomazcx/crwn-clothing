import {CaretLeft, CaretRight} from "phosphor-react"
import {useContext} from 'react'
import {CartContext, CART_ACTION_TYPES} from '../../contexts/cart.context'
import {QuantityCheckoutProductContainer, CaretIcon} from './quantity-checkout.styles'

export const QuantityCheckout = ({productId, quantity}) => {

	const {dispatch} = useContext(CartContext)

	const decreaseProductQuantityFromCart = (id) => {
		dispatch({type: CART_ACTION_TYPES.DECREASE_PRODUCT_QUANTITY, payload: {id}})
	}

	const increaseProductQuantityFromCart = (id) => {
		dispatch({type: CART_ACTION_TYPES.INCREASE_PRODUCT_QUANTITY, payload: {id}})
	}

	return (
		<QuantityCheckoutProductContainer>
			<CaretIcon as={CaretLeft} size={20} onClick={() => decreaseProductQuantityFromCart(productId)} />
			{quantity}
			<CaretIcon as={CaretRight} size={20} onClick={() => increaseProductQuantityFromCart(productId)} />
		</QuantityCheckoutProductContainer>

	)

}
