import {X} from 'phosphor-react'
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'
import {QuantityCheckout} from '../quantity-checkout/quantity-checkout.component'
import './checkout-item.styles.scss'

export const CheckoutItem = ({product}) => {

	const {removeProductFromCartState} = useContext(CartContext)

	return (
		<div className="checkout-item">
			<div><img src={product.imageUrl} alt="Product image" /></div>
			<div>{product.name}</div>
			<div>
				<QuantityCheckout productId={product.id} quantity={product.quantity} />
			</div>
			<div>${product.price * product.quantity}</div>
			<div>
				<X onClick={() => removeProductFromCartState(product.id)} className="x-checkout-product" />
			</div>
		</div>
	)
}
