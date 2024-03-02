import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetchData() {
	const url = 'https://swapi.dev/api/starships'

	const [starShips, setStarShips] = useState([])

	useEffect(() => {
		const fetchShips = async () => {
			try {
				const response = await axios.get(url)
				console.log(response)

				setStarShips(response.data.results)
			} catch (error) {
				console.error('Failed to fetch starships', error)
			}
		}
		fetchShips()
	}, [])

	console.log(starShips)
	return starShips
}
export default useFetchData
