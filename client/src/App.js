import './App.css';
import { Route, Routes } from 'react-router-dom'

//pages
import {
	Home,
	AboutUs
} from './pages/index.js'
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
						<h1>Soy el cuerpo principal del Home</h1>
					</>
				}
				/>
				<Route path='AboutUs' element={
					<>
						<h1>Sobre Nosotros</h1>
					</>
				} />
				<Route path='Products' element={
					<>
						<h1>Productos</h1>
					</>
				} />
				<Route path='Jewels' element={
					<>
						<h1>Joyas</h1>
					</>
				} />
				<Route path='Location' element={
					<>
						<h1>Como llegar</h1>
					</>
				} />
				<Route path='Contact' element={
					<>
						<h1>Contactanos</h1>
					</>
				} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
