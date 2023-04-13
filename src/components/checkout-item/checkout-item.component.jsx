import {useDispatch, useSelector} from 'react-redux'
import {QuantityCheckout} from '../quantity-checkout/quantity-checkout.component'
import {CheckoutItemContainer, RemoveProduct, CheckoutItemColumn} from './checkout-item.styles'
import {selectCartItems} from '../../store/cart/cart.selector'
import {clearProductFromCart} from '../../store/cart/cart.reducer'

export const CheckoutItem = ({product}) => {

	const cartItems = useSelector(state => selectCartItems(state))
	const dispatch = useDispatch()

	return (
		<CheckoutItemContainer>
			<CheckoutItemColumn><img src={product.imageUrl} alt="Product image" /></CheckoutItemColumn>
			<CheckoutItemColumn>{product.name}</CheckoutItemColumn>
			<CheckoutItemColumn>
				<QuantityCheckout product={product} />
			</CheckoutItemColumn>
			<CheckoutItemColumn>${product.price * product.quantity}</CheckoutItemColumn>
			<CheckoutItemColumn>
				<RemoveProduct onClick={() => dispatch(clearProductFromCart(product))} className="x-checkout-product" />
			</CheckoutItemColumn>
		</CheckoutItemContainer>
	)
}
