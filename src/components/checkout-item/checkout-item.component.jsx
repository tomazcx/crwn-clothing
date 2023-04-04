import {useContext} from 'react'
import {CartContext, CART_ACTION_TYPES} from '../../contexts/cart.context'
import {QuantityCheckout} from '../quantity-checkout/quantity-checkout.component'
import {CheckoutItemContainer, RemoveProduct, CheckoutItemColumn} from './checkout-item.styles'

export const CheckoutItem = ({product}) => {

	const {dispatch} = useContext(CartContext)

	const removeProductFromCart = (id) => {
		dispatch({type: CART_ACTION_TYPES.REMOVE_PRODUCT, payload: {id}})
	}

	return (
		<CheckoutItemContainer>
			<CheckoutItemColumn><img src={product.imageUrl} alt="Product image" /></CheckoutItemColumn>
			<CheckoutItemColumn>{product.name}</CheckoutItemColumn>
			<CheckoutItemColumn>
				<QuantityCheckout productId={product.id} quantity={product.quantity} />
			</CheckoutItemColumn>
			<CheckoutItemColumn>${product.price * product.quantity}</CheckoutItemColumn>
			<CheckoutItemColumn>
				<RemoveProduct onClick={() => removeProductFromCart(product.id)} className="x-checkout-product" />
			</CheckoutItemColumn>
		</CheckoutItemContainer>
	)
}
