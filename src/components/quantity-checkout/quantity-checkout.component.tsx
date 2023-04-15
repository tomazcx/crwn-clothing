import {CaretLeft, CaretRight} from "phosphor-react"
import {useDispatch} from "react-redux"
import {QuantityCheckoutProductContainer, CaretIcon} from './quantity-checkout.styles'
import {addProductToCart, CartItem, removeProductFromCart} from "../../store/cart/cart.reducer"

type QuantityCheckout = {
	product: CartItem
}

export const QuantityCheckout = ({product}: QuantityCheckout) => {

	const dispatch = useDispatch()

	return (
		<QuantityCheckoutProductContainer>
			<CaretIcon as={CaretLeft} size={20} onClick={() => dispatch(removeProductFromCart(product))} />
			{product.quantity}
			<CaretIcon as={CaretRight} size={20} onClick={() => dispatch(addProductToCart(product))} />
		</QuantityCheckoutProductContainer>

	)

}
