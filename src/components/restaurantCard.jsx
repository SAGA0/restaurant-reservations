import React from 'react'
import { useNavigate } from 'react-router-dom'

const RestaurantCard = ({ restaurant, onReserve }) => {
	const navigate = useNavigate()

	return (
		<div
			className="rounded-lg p-6 bg-cover h-64 bg-center shadow-md hover:shadow-lg transition-shadow relative"
			style={{ backgroundImage: `url(${restaurant.image})` }}
		>
			<div
				className="absolute inset-0 bg-black bg-opacity-50 rounded-lg cursor-pointer"
				onClick={() => navigate(`/restaurant/${restaurant.id}`)} // Переход на страницу ресторана
			></div>
			<div className="relative z-10 text-white">
				<h2 className="text-2xl font-semibold">{restaurant.name}</h2>
				<p className="text-sm">{restaurant.cuisine}</p>
				<p className="text-sm">⭐{restaurant.rating}</p>
				<p className="text-sm mt-2">{restaurant.description}</p>

				<button
					className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
					onClick={(e) => {
						e.stopPropagation()
						onReserve()
					}}
				>
					Бронь Стола
				</button>
			</div>
		</div>
	)
}

export default RestaurantCard
