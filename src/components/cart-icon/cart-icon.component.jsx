import './cart-icon.styles.scss'
import CartSVG from '../../assets/shopping-bag.svg'
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context';

export const CartIcon = () => {

	const {cartItems} = useContext(CartContext)

	return (
		<div className='cart-icon-container'>
			<img src={CartSVG} alt="Cart Icon" />
			<span>{cartItems.length}</span>
		</div>
	)
}
