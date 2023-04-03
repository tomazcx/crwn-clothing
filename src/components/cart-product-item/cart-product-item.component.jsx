import {CartProductItemText, CartProductItemContainer} from "./cart-product-item.styles"

export const CartProductItem = ({product}) => {

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
