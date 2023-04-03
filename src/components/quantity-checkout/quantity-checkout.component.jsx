import './quantity-checkout.styles.scss'
import {CaretLeft, CaretRight} from "phosphor-react"
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'

export const QuantityCheckout = ({productId, quantity}) => {

	const {increaseProductQuantityFromCartState, decreaseProductQuantityFromCartState} = useContext(CartContext)

	return (
		<div className="quantity-checkout-product">
			<CaretLeft size={20} className="caret" onClick={() => decreaseProductQuantityFromCartState(productId)} />
			{quantity}
			<CaretRight size={20} className="caret" onClick={() => increaseProductQuantityFromCartState(productId)} />
		</div>

	)

}
