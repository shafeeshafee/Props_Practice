export default function Book(props) {
	return (
		<div className="book-container">
			<h1 className="book-title">{props.title}</h1>
			<div className="info">
				<img className="book-img" src={props.image} alt="Book" />
				<h3 className="book-description">{props.description}</h3>
			</div>
		</div>
	);
}
