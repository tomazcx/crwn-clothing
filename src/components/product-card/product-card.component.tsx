import {useAppDispatch} from '../../hooks/useAppDispatch'
import {addProductToCart, CartItem} from '../../store/cart/cart.reducer'
import {Button, BUTTON_TYPE_ENUM} from '../button/button.component'
import {ProductCardContainer, ProductImage, ProductCardTextContainer} from './product-card.styles'

type ProductCard = CartItem

export const ProductCard = ({id, name, imageUrl, price}: ProductCard) => {

	const dispatch = useAppDispatch()

	return (
		<ProductCardContainer>
			<ProductImage src={imageUrl} alt="Product image" />
			<ProductCardTextContainer>
				<span>{name}</span>
				<span>${price}</span>
			</ProductCardTextContainer>
			<Button onClick={() => dispatch(addProductToCart({id, name, imageUrl, price, quantity: 1}))} buttonType={BUTTON_TYPE_ENUM.inverted} type="button">add to cart</Button>
		</ProductCardContainer>
	)

}
