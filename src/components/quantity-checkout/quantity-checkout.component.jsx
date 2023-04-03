import {CaretLeft, CaretRight} from "phosphor-react"
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'
import {QuantityCheckoutProductContainer, CaretIcon} from './quantity-checkout.styles'

export const QuantityCheckout = ({productId, quantity}) => {

	const {increaseProductQuantityFromCartState, decreaseProductQuantityFromCartState} = useContext(CartContext)

	return (
		<QuantityCheckoutProductContainer>
			<CaretIcon as={CaretLeft} size={20} onClick={() => decreaseProductQuantityFromCartState(productId)} />
			{quantity}
			<CaretIcon as={CaretRight} size={20} onClick={() => increaseProductQuantityFromCartState(productId)} />
		</QuantityCheckoutProductContainer>

	)

}
