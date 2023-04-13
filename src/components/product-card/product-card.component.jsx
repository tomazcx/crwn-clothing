import {useDispatch} from 'react-redux'
import {addProductToCart} from '../../store/cart/cart.reducer'
import {Button, BUTTON_TYPE_CLASSES} from '../button/button.component'
import {ProductCardContainer, ProductImage, ProductCardTextContainer} from './product-card.styles'

export const ProductCard = ({id, name, imageUrl, price}) => {

	const dispatch = useDispatch()

	return (
		<ProductCardContainer>
			<ProductImage src={imageUrl} alt="Product image" />
			<ProductCardTextContainer>
				<span>{name}</span>
				<span>${price}</span>
			</ProductCardTextContainer>
			<Button onClick={() => dispatch(addProductToCart({id, name, imageUrl, price}))} buttonType={BUTTON_TYPE_CLASSES.inverted} type="button">add to cart</Button>
		</ProductCardContainer>
	)

}
