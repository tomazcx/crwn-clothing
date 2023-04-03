import './shop.styles.scss'
import {useContext} from 'react'
import {ProductCard} from '../../components/product-card/product-card.component'
import {ProductsContext} from '../../contexts/products.context'

export const Shop = () => {

	const {products} = useContext(ProductsContext)

	return (
		<main className="products-container">
			{products.map(product => <ProductCard key={product.id} id={product.id} name={product.name} imageUrl={product.imageUrl} price={product.price} >{product.name}</ProductCard>)}
		</main>
	)
}
