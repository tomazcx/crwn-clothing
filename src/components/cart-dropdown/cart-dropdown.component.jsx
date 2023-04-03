import './cart-dropdown.styles.scss'
import {Button} from '../button/button.component'
import * as Popover from '@radix-ui/react-popover';
import {CartIcon} from '../cart-icon/cart-icon.component';
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';
import {CartProductItem} from '../cart-product-item/cart-product-item.component';
import {Link} from 'react-router-dom';

export const CartDropdown = () => {

	const {cartItems, cartValue} = useContext(CartContext)

	return (
		<Popover.Root>
			<Popover.Trigger className='cart-dropdown-trigger'>
				<CartIcon />
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content className='cart-dropdown'>
					<Popover.Arrow height={8} width={16} />
					<span className='cart-title'>Your cart - Total: ${cartValue}</span>
					{cartItems.length > 0 ? cartItems.map(product => <CartProductItem key={product.id} product={product} />) : <span>Your cart is empty.</span>}

					{cartItems.length > 0 ?
						<Button type="button" buttonType="inverted">
							<Link to="checkout">Go to checkout</Link>
						</Button> :
						<Button type="button" buttonType="inverted">
							<Link to="/shop">Start Shopping</Link>
						</Button>
					}
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	)

}
