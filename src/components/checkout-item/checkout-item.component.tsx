import {QuantityCheckout} from '../quantity-checkout/quantity-checkout.component'
import {CheckoutItemContainer, RemoveProduct, CheckoutItemColumn} from './checkout-item.styles'
import {CartItem, clearProductFromCart} from '../../store/cart/cart.reducer'
import {useAppDispatch} from '../../hooks/useAppDispatch'

type CheckoutItem = {
	product: CartItem
}

export const CheckoutItem = ({product}: CheckoutItem) => {

	const dispatch = useAppDispatch()

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
