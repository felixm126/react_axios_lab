import { useState, useEffect } from 'react'
import useFetchData from '../hooks/useFetchData'
import '../App.css'

function StarshipsList() {
	// get array from hook and declare it equal to starships
	const starships = useFetchData()

	const [isLoading, setIsLoading] = useState(true)

	// set the schema for information wed like returned
	const starshipSchema = [
		'name',
		'model',
		'manufacturer',
		'cost_in_credits',
		'length',
		'max_atmosphering_speed',
		'crew',
		'passengers',
		'cargo_capacity',
		'consumables',
		'hyperdrive_rating',
		'MGLT',
		'starship_class',
		'pilots',
		'films',
		'created',
		'edited',
		'url',
	]

	useEffect(() => {
		if (starships.length) {
			setIsLoading(false)
		}
	}, [starships])

	const mapStarships = (starships) => {
		// map data to the schema
		return starships.map((starship) => {
			const mappedStarship = {}

			// Then iterate each starship for its item
			starshipSchema.forEach((item) => {
				mappedStarship[item] = starship[item]
			})
			return mappedStarship
		})
	}
	const mappedStarships = mapStarships(starships)

	if (isLoading) {
		return <div>Loading,please wait...</div>
	}

	return (
		<div className="card-container">
			{/* render starships with each attribute as the value */}
			{mappedStarships.map((starship, index) => (
				<div key={index} className="card">
					{starshipSchema.map((item, index) => (
						<p key={index}>{`${item}: ${starship[item]}`}</p>
					))}
				</div>
			))}
		</div>
	)
}
export default StarshipsList
