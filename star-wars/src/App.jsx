import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div>
			<Header />
			<Main />
		</div>
	)
}

export default App
