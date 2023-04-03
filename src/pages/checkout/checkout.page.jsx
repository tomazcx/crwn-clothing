import {CheckoutContainer, CheckoutTable, CheckoutTableHead, EmptyText, PaymentContainer, TotalText} from "./checkout.styles"
import {useContext} from "react"
import {CheckoutItem} from "../../components/checkout-item/checkout-item.component"
import {CartContext} from "../../contexts/cart.context"
import {Button} from '../../components/button/button.component'

export const Checkout = () => {

	const {cartItems, cartValue} = useContext(CartContext)

	return (
		<CheckoutContainer>
			<CheckoutTable>
				<CheckoutTableHead>
					<span>Image</span>
					<span>Name</span>
					<span>Quantity</span>
					<span>Price</span>
					<span>Remove</span>
				</CheckoutTableHead>
				{cartItems.length > 0 ? cartItems.map(product => <CheckoutItem key={product.id} product={product} />) : <EmptyText className='empty-text'>Your cart is empty.</EmptyText>}
			</CheckoutTable>
			{
				cartItems.length > 0 ?
					<PaymentContainer>
						<TotalText>Total: ${cartValue} </TotalText>
						<Button type="button" >Go to payment</Button>
					</PaymentContainer> : null
			}
		</CheckoutContainer>
	)

}
