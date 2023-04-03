import {BodyContainer, BackgroundImage, CategoryContainer} from './category.styles'

export const Category = ({idCategory, title, image}) => {


	return (
		<CategoryContainer to={`/shop?category=${idCategory}`}>
			<BackgroundImage imageUrl={image} >
				<BodyContainer>
					<h2>{title}</h2>
					<p>Shop now</p>
				</BodyContainer>
			</BackgroundImage>
		</CategoryContainer>
	)

}
