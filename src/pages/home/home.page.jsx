import {Category} from '../../components/category/category.component'
import {HomeContainer} from './home.styles'

export const Home = () => {

	const categories = [
		{
			"id": 0,
			"title": "hats",
			"imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
		},
		{
			"id": 1,
			"title": "jackets",
			"imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
		},
		{
			"id": 2,
			"title": "sneakers",
			"imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
		},
		{
			"id": 3,
			"title": "womens",
			"imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
		},
		{
			"id": 4,
			"title": "mens",
			"imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
		}
	]


	return (
		<HomeContainer>
			{categories.map(({title, id, imageUrl}) => <Category key={id} idCategory={id} title={title} image={imageUrl} />)}
		</HomeContainer>
	)
}

