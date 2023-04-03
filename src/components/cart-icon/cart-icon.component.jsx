import CartSVG from '../../assets/shopping-bag.svg'
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context';
import {CartIconSVG, CartIconCount, CartIconContainer} from './cart-icon.styles';

export const CartIcon = () => {

	const {cartItems} = useContext(CartContext)

	return (
		<CartIconContainer>
			<CartIconSVG src={CartSVG} alt="Cart Icon" />
			<CartIconCount>{cartItems.length}</CartIconCount>
		</CartIconContainer>
	)
}
