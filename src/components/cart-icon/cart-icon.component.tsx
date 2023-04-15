import CartSVG from '../../assets/shopping-bag.svg'
import {CartIconSVG, CartIconCount, CartIconContainer} from './cart-icon.styles';
import {selectCartCount} from '../../store/cart/cart.selector';
import {useAppSelector} from '../../hooks/useAppSelector';

export const CartIcon = () => {

	const cartCount = useAppSelector(state => selectCartCount(state))

	return (
		<CartIconContainer>
			<CartIconSVG src={CartSVG} alt="Cart Icon" />
			<CartIconCount>{cartCount}</CartIconCount>
		</CartIconContainer>
	)
}
