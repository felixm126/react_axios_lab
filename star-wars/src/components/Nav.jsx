import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<h2 className="navbar-container">
			<p>
				<Link to="/">Landing Page</Link>
				<Link to="/starships">Starships Page</Link>
			</p>
		</h2>
	)
}
export default Navbar
