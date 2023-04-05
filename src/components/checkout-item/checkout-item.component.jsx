import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'
import {QuantityCheckout} from '../quantity-checkout/quantity-checkout.component'
import {CheckoutItemContainer, RemoveProduct, CheckoutItemColumn} from './checkout-item.styles'

export const CheckoutItem = ({product}) => {

	const {removeItemFromCart} = useContext(CartContext)

	return (
		<CheckoutItemContainer>
			<CheckoutItemColumn><img src={product.imageUrl} alt="Product image" /></CheckoutItemColumn>
			<CheckoutItemColumn>{product.name}</CheckoutItemColumn>
			<CheckoutItemColumn>
				<QuantityCheckout productId={product.id} quantity={product.quantity} />
			</CheckoutItemColumn>
			<CheckoutItemColumn>${product.price * product.quantity}</CheckoutItemColumn>
			<CheckoutItemColumn>
				<RemoveProduct onClick={() => removeItemFromCart(product.id)} className="x-checkout-product" />
			</CheckoutItemColumn>
		</CheckoutItemContainer>
	)
}
