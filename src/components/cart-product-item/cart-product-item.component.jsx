import './cart-product-item.styles.scss'

export const CartProductItem = ({product}) => {

	return (
		<div className='cart-product-item'>
			<img src={product.imageUrl} alt="Product card" />
			<div className='cart-item-text'>
				<span>{product.name}</span>
				<span>{product.quantity} X ${product.price}</span>
			</div>
		</div>
	)

}
