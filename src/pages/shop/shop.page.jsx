import {MainShopContainer, FilterForm, FilterContainer, LoadingIcon, ProductsContainer} from './shop.styles'
import {useContext, useEffect, useState} from 'react'
import {ProductCard} from '../../components/product-card/product-card.component'
import {SelectCategory} from '../../components/select-category/select-category.component'
import {SearchInput} from '../../components/search-input/search-input.component'
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setCategories} from '../../store/categories/categories.action'
import {useCategories} from '../../hooks/useCategories'

const ENUM_CATEGORIES = [
	'hats',
	'jackets',
	'sneakers',
	'womens',
	'mens'
]

export const Shop = () => {

	const categories = useSelector(state => state.categories.categoriesMap)
	const dispatch = useDispatch()
	const location = useLocation()
	const {getCategoriesAndDocuments} = useCategories()
	const queryParams = new URLSearchParams(location.search)
	const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') ? queryParams.get('category') : 0)
	const [searchText, setText] = useState('')

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesMap = await getCategoriesAndDocuments()
			dispatch(setCategories(categoriesMap))
		}
		getCategoriesMap()
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
					categories[ENUM_CATEGORIES[selectedCategory]]
						? filteredCategory.map(product => <ProductCard id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} key={product.id} />)
						: <LoadingIcon type={'spin'} color={'#000'} height={60} width={60} className="loading-icon" />
				}
			</ProductsContainer>
		</MainShopContainer>
	)
}

