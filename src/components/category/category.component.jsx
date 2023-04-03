import './category.styles.scss';
import {Link} from 'react-router-dom'

export const Category = ({idCategory, title, image}) => {


	return (
		<Link to={`/shop?category=${idCategory}`} className='category-card'>
			<div className="background-image" style={{
				backgroundImage: `url(${image})`,
			}}>
				<div className="category-body-container">
					<h2>{title}</h2>
					<p>Shop now</p>
				</div>
			</div>
		</Link>
	)

}
