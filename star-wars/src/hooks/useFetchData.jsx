import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetchData() {
	const url = 'https://swapi.dev/api/starships'

	const [starShips, setStarShips] = useState([])

	useEffect(() => {
		console.log('Mounted the ship!')
		const fetchShips = async () => {
			const response = await axios.get(url)
			console.log(response)

			setStarShips(response.data.results)
			console.log(response.data.results, 'fetch data 16')
		}
		fetchShips()
	}, [])

	console.log(starShips)
	return starShips
}
export default useFetchData
