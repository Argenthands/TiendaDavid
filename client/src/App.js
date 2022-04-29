import './App.css';
import { Route, Routes } from 'react-router-dom'

//pages
import {
	Home,
	AboutUs,
	Products,
	Location,
	NotFound,
} from './pages/index.js'

//components
import {
	NavBar,
	Footer,
} from './componets/index.js'

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path='/' element={
					<>
						<Home />
					</>
				}
				/>
				<Route path='AboutUs' element={
					<>
						<AboutUs />
					</>
				} />
				<Route path='Products' element={
					<>
						<Products />
					</>
				} />
				<Route path='Jewels' element={
					<>
						<h1>Joyas</h1>
					</>
				} />
				<Route path='Location' element={
					<>
						<Location />
					</>
				} />
				<Route path='Contact' element={
					<>
						<h1>Contactanos</h1>
					</>
				} />
				<Route path='*' element={
					<>
						<NotFound />
					</>
				} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
