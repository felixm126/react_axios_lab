import useFetchData from '../hooks/useFetchData'

function StarshipsList() {
	// get array from hook and declare it equal to starships
	const starships = useFetchData()
	console.log(starships)

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

	return (
		<div className="starships-list">
			{/* render starships with each attribute as the value*/}
			{mappedStarships.map((starship, index) => (
				<div item={index}>
					{starshipSchema.map((item) => {
						;<p item={item}>{`${item}: ${starship[item]}`}</p>
					})}
				</div>
			))}
		</div>
	)
}
export default StarshipsList
