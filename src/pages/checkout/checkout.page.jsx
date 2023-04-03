import './checkout.styles.scss'
import {useContext} from "react"
import {CheckoutItem} from "../../components/checkout-item/checkout-item.component"
import {CartContext} from "../../contexts/cart.context"
import {Button} from '../../components/button/button.component'

export const Checkout = () => {

	const {cartItems, cartValue} = useContext(CartContext)

	return (
		<main className='checkout-container'>
			<div className='checkout-table'>
				<div className='table-head'>
					<div>Image</div>
					<div>Name</div>
					<div>Quantity</div>
					<div>Price</div>
					<div>Remove</div>
				</div>
				{cartItems.length > 0 ? cartItems.map(product => <CheckoutItem key={product.id} product={product} />) : <p className='empty-text'>Your cart is empty.</p>}
			</div>
			{
				cartItems.length > 0 ?
					<div className='bottom-container'>
						<span className='total-text'>Total: ${cartValue} </span>
						<Button buttonType={'default'}>Go to payment</Button>
					</div> : null
			}
		</main>
	)

}
