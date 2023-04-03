import './category.styles.scss';

export const Category = ({title, image}) => {


	return (
		<div className='category-card'>
			<div className="background-image" style={{
				backgroundImage: `url(${image})`,
			}}>
				<div className="category-body-container">
					<h2>{title}</h2>
					<p>Shop now</p>
				</div>
			</div>
		</div>
	)

}
