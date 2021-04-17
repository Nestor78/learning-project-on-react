import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';

function App() {
	return (
		<BrowserRouter>
			<section className="App">
				<Header />
				<User />
				<Navbar />
			</section>
		</BrowserRouter>
	);
}

export default App;
