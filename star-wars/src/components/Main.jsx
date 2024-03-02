import { Routes, Route } from 'react-router-dom'
import StarshipsList from './StarshipsList'
import Home from './Home'

function Main() {
	return (
		<h3 className="main-routes">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/starships" element={<StarshipsList />} />
			</Routes>
		</h3>
	)
}
export default Main
