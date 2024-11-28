// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import RestaurantMenu from './components/restaurantMenu'
import React from 'react'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/restaurant/:id" element={<RestaurantMenu />} />
			</Routes>
		</Router>
	)
}

export default App
