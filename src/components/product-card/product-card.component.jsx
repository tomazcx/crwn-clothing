import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'
import {Button} from '../button/button.component'
import './product-card.styles.scss'

export const ProductCard = ({id, name, imageUrl, price}) => {

	const {addProductToCartState} = useContext(CartContext)

	return (
		<div className='product-card'>
			<img src={imageUrl} alt="Product image" />
			<div className='card-text'>
				<span>{name}</span>
				<span>${price}</span>
			</div>
			<Button onClick={() => addProductToCartState({id, name, imageUrl, price})} buttonType={"inverted"} type="button">add to cart</Button>
		</div>
	)

}
