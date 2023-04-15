import {BodyContainer, BackgroundImage, CategoryContainer} from './category.styles'

type CategoryContainer = {
	idCategory: number,
	title: string,
	image: string
}

export const Category = ({idCategory, title, image}: CategoryContainer) => {


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
