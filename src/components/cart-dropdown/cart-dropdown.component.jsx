import {Button, BUTTON_TYPE_CLASSES} from '../button/button.component'
import * as Popover from '@radix-ui/react-popover';
import {CartIcon} from '../cart-icon/cart-icon.component';
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';
import {CartProductItem} from '../cart-product-item/cart-product-item.component';
import {Link} from 'react-router-dom';
import {PopoverContentContainer, PopoverTitle, PopoverTriggerContainer, PopoverCartProductsContainer} from './cart-dropdown.styles';

export const CartDropdown = () => {

	const {cartItems, cartValue} = useContext(CartContext)

	return (
		<Popover.Root>
			<PopoverTriggerContainer>
				<CartIcon />
			</PopoverTriggerContainer>
			<Popover.Portal>
				<PopoverContentContainer>
					<Popover.Arrow height={8} width={16} />
					<PopoverTitle>Your cart - Total: ${cartValue}</PopoverTitle>

					<PopoverCartProductsContainer>
						{cartItems.length > 0 ? cartItems.map(product => <CartProductItem key={product.id} product={product} />) : <span>Your cart is empty.</span>}
					</PopoverCartProductsContainer>

					{cartItems.length > 0 ?
						<Button type="button" buttonType={BUTTON_TYPE_CLASSES.inverted}>
							<Link to="checkout">Go to checkout</Link>
						</Button> :
						<Button type="button" buttonType={BUTTON_TYPE_CLASSES.inverted}>
							<Link to="/shop">Start Shopping</Link>
						</Button>
					}
				</PopoverContentContainer>
			</Popover.Portal>
		</Popover.Root>
	)

}
