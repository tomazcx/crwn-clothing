import {MainShopContainer, FilterForm, FilterContainer, LoadingIcon, ProductsContainer} from './shop.styles'
import {useEffect, useState} from 'react'
import {ProductCard} from '../../components/product-card/product-card.component'
import {SelectCategory} from '../../components/select-category/select-category.component'
import {SearchInput} from '../../components/search-input/search-input.component'
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {selectCategoriesIsLoading, selectCategoriesMap} from '../../store/categories/categories.selector'
import {fetchCategoriesAsync} from '../../store/categories/categories.thunk'


const ENUM_CATEGORIES = [
	'hats',
	'jackets',
	'sneakers',
	'womens',
	'mens'
]

export const Shop = () => {

	const categories = useSelector(state => selectCategoriesMap(state))
	const isLoading = useSelector(state => selectCategoriesIsLoading(state))
	const dispatch = useDispatch()
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') ? queryParams.get('category') : 0)
	const [searchText, setText] = useState('')

	useEffect(() => {
		dispatch(fetchCategoriesAsync())
	}, [dispatch])


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
					isLoading === false
						? filteredCategory.map(product => <ProductCard id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} key={product.id} />)
						: <LoadingIcon type={'spin'} color={'#000'} height={60} width={60} className="loading-icon" />
				}
			</ProductsContainer>
		</MainShopContainer>
	)
}

