import {MainShopContainer, FilterForm, FilterContainer, LoadingIcon, ProductsContainer} from './shop.styles'
import {ChangeEvent, useEffect, useState} from 'react'
import {ProductCard} from '../../components/product-card/product-card.component'
import {SelectCategory} from '../../components/select-category/select-category.component'
import {SearchInput} from '../../components/search-input/search-input.component'
import {useLocation} from 'react-router-dom'
import {selectCategoriesIsLoading, selectCategoriesMap} from '../../store/categories/categories.selector'
import {fetchCategoriesAsync} from '../../store/categories/categories.thunk'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {useAppSelector} from '../../hooks/useAppSelector'


const CATEGORIES_TITLES = [
	'hats',
	'jackets',
	'sneakers',
	'womens',
	'mens'
]

export const Shop = () => {

	const categories = useAppSelector(state => selectCategoriesMap(state))
	const isLoading = useAppSelector(state => selectCategoriesIsLoading(state))
	const dispatch = useAppDispatch()
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') ?? 0)
	const [searchText, setText] = useState('')

	useEffect(() => {
		dispatch(fetchCategoriesAsync())
	}, [dispatch])


	const filteredCategory = categories[CATEGORIES_TITLES[Number(selectedCategory)]] ? categories[CATEGORIES_TITLES[Number(selectedCategory)]].filter(product => product.name.toLowerCase().includes(searchText.toLowerCase())) : []



	return (
		<MainShopContainer>
			<FilterContainer>
				<h1>Shop our products</h1>

				<FilterForm>
					<SelectCategory value={selectedCategory} onChange={(event: ChangeEvent<HTMLSelectElement>) => setSelectedCategory(event.target.value)} name="select-category" />
					<SearchInput placeholder="Search by name..." value={searchText} onChange={(event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)} type="search" name="search-input" />
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

