import CartSVG from '../../assets/shopping-bag.svg'
import {CartIconSVG, CartIconCount, CartIconContainer} from './cart-icon.styles';
import {useSelector} from 'react-redux';
import {selectCartCount} from '../../store/cart/cart.selector';

export const CartIcon = () => {

	const cartCount = useSelector(state => selectCartCount(state))

	return (
		<CartIconContainer>
			<CartIconSVG src={CartSVG} alt="Cart Icon" />
			<CartIconCount>{cartCount}</CartIconCount>
		</CartIconContainer>
	)
}
