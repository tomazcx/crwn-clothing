import {useContext} from 'react'
import {CartContext, CART_ACTION_TYPES} from '../../contexts/cart.context'
import {Button, BUTTON_TYPE_CLASSES} from '../button/button.component'
import {ProductCardContainer, ProductImage, ProductCardTextContainer} from './product-card.styles'

export const ProductCard = ({id, name, imageUrl, price}) => {

	const {dispatch} = useContext(CartContext)

	const addProductToCart = (product) => {
		dispatch({type: CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload: product})
	}

	return (
		<ProductCardContainer>
			<ProductImage src={imageUrl} alt="Product image" />
			<ProductCardTextContainer>
				<span>{name}</span>
				<span>${price}</span>
			</ProductCardTextContainer>
			<Button onClick={() => addProductToCart({id, name, imageUrl, price})} buttonType={BUTTON_TYPE_CLASSES.inverted} type="button">add to cart</Button>
		</ProductCardContainer>
	)

}
