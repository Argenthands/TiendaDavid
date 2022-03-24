import './App.css';
import { Route, Routes } from 'react-router-dom'

//components
import NavBar from './componets/NavBar/NavBar';
import Footer from './componets/Footer/Footer'

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path='/' element={
					<>
					<h1>Soy el cuerpo principal de la pagina</h1>
					</>
				}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
