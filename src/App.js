import "./App.css";
import Header from "./Components/Header";
import Book from "./Components/Book";
import Footer from "./Components/Footer";
import Data from "./Data";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			<div>
				{Data.map((book) => {
					return <Book title={book.title} image={book.image} author={book.author} description={book.description} />;
				})}
			</div>
			<Footer />
		</div>
	);
}

export default App;
