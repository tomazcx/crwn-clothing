import './shop.styles.scss'
import {useContext, useState} from 'react'
import {ProductCard} from '../../components/product-card/product-card.component'
import {CategoriesContext} from '../../contexts/categories.context'
import {MagnifyingGlass} from 'phosphor-react'
import {SelectCategory} from '../../components/select-category/select-category.component'
import {SearchInput} from '../../components/search-input/search-input.component'
import ReactLoading from 'react-loading';
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
		<main className="main-shop-container">
			<div className='filter-container'>
				<h1>Shop our products</h1>

				<form className='filter-form'>
					<SelectCategory value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} name="select-category" />
					<SearchInput placeholder="Search by name..." value={searchText} onChange={event => setText(event.target.value)} type="search" name="search-input" />
				</form>
			</div>
			<section className='products-container'>
				{
					categories[ENUM_CATEGORIES[selectedCategory]]
						? filteredCategory.map(product => <ProductCard id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} />)
						: <ReactLoading type={'spin'} color={'#000'} height={60} width={60} className="loading-icon" />
				}
			</section>
		</main>
	)
}

