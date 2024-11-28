// src/components/RestaurantMenu.jsx

import { useParams, useNavigate } from 'react-router-dom'
import { restaurants } from '../data/restaurants'
import React from 'react'

const RestaurantMenu = () => {
	const { id } = useParams()
	// @ts-ignore
	const restaurant = restaurants.find((r) => r.id === parseInt(id))
	const navigate = useNavigate()

	if (!restaurant) {
		return <p>Ресторан не найден</p>
	}

	return (
		<div className="p-6 bg-neutral min-h-screen">
			<button
				className="mb-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
				onClick={() => navigate(-1)}
			>
				Назад
			</button>
			<h1 className="text-3xl font-bold text-textPrimary mb-1">
				{restaurant.name}
			</h1>
			<hr className="border-green-500 border-t-2 mt-1 w-52 mb-2" />
			<p className="text-lg mb-4">{restaurant.description}</p>
			<h2 className="text-2xl font-semibold mb-1">Меню</h2>
			<hr className="border-green-500 border-t-2 mt-1 w-3/6 mb-6" />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{restaurant.menu.map((dish) => (
					<div
						key={dish.id}
						className="p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow"
					>
						<img
							src={dish.image}
							alt={dish.name}
							className="w-full h-64 object-cover rounded-md mb-4"
						/>
						<h3 className="text-xl font-semibold">{dish.name}</h3>
						<hr className="border-red-900 border-t-2 mb-4" />
						<p className="text-sm text-gray-600">{dish.description}</p>
						<p className="text-lg font-bold mt-2 text-green-500">
							{dish.price}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default RestaurantMenu
