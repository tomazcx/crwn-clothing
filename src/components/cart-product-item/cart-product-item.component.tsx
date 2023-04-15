import {CartProductItemText, CartProductItemContainer} from "./cart-product-item.styles"
import {CartItem} from "../../store/cart/cart.reducer"

type CartProductItem = {
	product: CartItem
}

export const CartProductItem = ({product}: CartProductItem) => {

	return (
		<CartProductItemContainer>
			<img src={product.imageUrl} alt="Product card" />
			<CartProductItemText>
				<span>{product.name}</span>
				<span>{product.quantity} X ${product.price}</span>
			</CartProductItemText>
		</CartProductItemContainer>
	)

}
