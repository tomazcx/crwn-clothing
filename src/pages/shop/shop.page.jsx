import {MainShopContainer, FilterForm, FilterContainer, LoadingIcon, ProductsContainer} from './shop.styles'
import {useContext, useState} from 'react'
import {ProductCard} from '../../components/product-card/product-card.component'
import {CategoriesContext} from '../../contexts/categories.context'
import {SelectCategory} from '../../components/select-category/select-category.component'
import {SearchInput} from '../../components/search-input/search-input.component'
import {useLocation} from 'react-router-dom'

const ENUM_CATEGORIES = [
	'hats',
	'jackets',
	'sneakers',
	'womens',
	'mens'
]

export const Shop = () => {

	const {categories} = useContext(CategoriesContext)
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') ? queryParams.get('category') : 0)
	const [searchText, setText] = useState('')

	const filteredCategory = categories[ENUM_CATEGORIES[selectedCategory]] ? categories[ENUM_CATEGORIES[selectedCategory]].filter(product => product.name.toLowerCase().includes(searchText.toLowerCase())) : []



	return (
		<MainShopContainer>
			<FilterContainer>
				<h1>Shop our products</h1>

				<FilterForm>
					<SelectCategory value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} name="select-category" />
					<SearchInput placeholder="Search by name..." value={searchText} onChange={event => setText(event.target.value)} type="search" name="search-input" />
				</FilterForm>
			</FilterContainer>
			<ProductsContainer>
				{
					categories[ENUM_CATEGORIES[selectedCategory]]
						? filteredCategory.map(product => <ProductCard id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} key={product.id} />)
						: <LoadingIcon type={'spin'} color={'#000'} height={60} width={60} className="loading-icon" />
				}
			</ProductsContainer>
		</MainShopContainer>
	)
}

