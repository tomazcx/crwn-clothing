import {CaretLeft, CaretRight} from "phosphor-react"
import {useDispatch} from "react-redux"
import {QuantityCheckoutProductContainer, CaretIcon} from './quantity-checkout.styles'
import {addProductToCart, removeProductFromCart} from "../../store/cart/cart.reducer"

export const QuantityCheckout = ({product}) => {

	const dispatch = useDispatch()

	return (
		<QuantityCheckoutProductContainer>
			<CaretIcon as={CaretLeft} size={20} onClick={() => dispatch(removeProductFromCart(product))} />
			{product.quantity}
			<CaretIcon as={CaretRight} size={20} onClick={() => dispatch(addProductToCart(product))} />
		</QuantityCheckoutProductContainer>

	)

}
