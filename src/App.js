import "./App.css";
import Header from "./Components/Header";
import Book from "./Components/Book";
import Footer from "./Components/Footer";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			{/* Book 1 */}
			<Book
				title="Love in the Time of Cholera"
				description="A story about unrequited love. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				author="Gabriel Garcia Marquez"
				image="https://images-na.ssl-images-amazon.com/images/I/41+HorgT4YL._SX322_BO1,204,203,200_.jpg"
			/>
			{/* Book 2 */}
			<Book
				title="The Stranger"
				description="L'Étranger is a 1942 novel by French author Albert Camus. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				author="Albert Camus"
				image="https://images-na.ssl-images-amazon.com/images/I/517eqjeVDzL._SX322_BO1,204,203,200_.jpg"
			/>
			<Footer />
		</div>
	);
}

export default App;
