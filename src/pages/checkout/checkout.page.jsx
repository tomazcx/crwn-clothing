import {CheckoutContainer, CheckoutTable, CheckoutTableHead, EmptyText, PaymentContainer, TotalText} from "./checkout.styles"
import {CheckoutItem} from "../../components/checkout-item/checkout-item.component"
import {Button} from '../../components/button/button.component'
import {useSelector} from "react-redux"
import {selectCartItems, selectCartValue} from "../../store/cart/cart.selector"
import {PaymentForm} from "../../components/payment-form/payment-form.component"

export const Checkout = () => {

	const cartItems = useSelector(state => selectCartItems(state))
	const cartValue = useSelector(state => selectCartValue(state))

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
			<PaymentForm />
		</CheckoutContainer>
	)

}
