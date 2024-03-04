import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

function App() {
	return (
		<div>
			<Header />
			<Main />
		</div>
	)
}
export default App

// ->>	Add Conditional Rendering		<---
// 		Guard Operators
