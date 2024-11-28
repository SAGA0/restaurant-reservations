// src/components/Home.jsx

import { useState, useEffect } from 'react'
import { restaurants as defaultRestaurants } from '../data/restaurants' // импортируем рестораны
import RestaurantCard from '../components/restaurantCard'
import ReservationModal from '../components/reservationModal'
import Filter from '../components/filter'
import {
	saveToLocalStorage,
	loadFromLocalStorage,
} from '../utils/localStorageUtils'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Home = () => {
	const navigate = useNavigate()
	const [filters, setFilters] = useState({ cuisine: 'Все', rating: 0 })
	const [reservationMessage, setReservationMessage] = useState('')
	const [selectedRestaurant, setSelectedRestaurant] = useState(null) // ресторан для резервации
	const [restaurantsWithReservations, setRestaurantsWithReservations] =
		useState([])

	// Инициализация данных из localStorage
	useEffect(() => {
		const savedRestaurants = loadFromLocalStorage(
			'restaurants',
			defaultRestaurants,
		)
		setRestaurantsWithReservations(savedRestaurants)
	}, [])

	// Фильтрация ресторанов
	const filteredRestaurants = restaurantsWithReservations.filter(
		(restaurant) =>
			// @ts-ignore
			(filters.cuisine === 'Все' || restaurant.cuisine === filters.cuisine) &&
			// @ts-ignore
			restaurant.rating >= Number(filters.rating),
	)

	// Резервирование столика
	const handleReserve = (restaurantId, selectedTime) => {
		const updatedRestaurants = restaurantsWithReservations.map((restaurant) =>
			// @ts-ignore
			restaurant.id === restaurantId
				? {
						// @ts-ignore
						...restaurant,
						// @ts-ignore
						reservations: [...restaurant.reservations, selectedTime],
						// @ts-ignore
						availableTimes: restaurant.availableTimes.filter(
							(time) => time !== selectedTime,
						),
				  }
				: restaurant,
		)

		// @ts-ignore
		setRestaurantsWithReservations(updatedRestaurants)
		saveToLocalStorage('restaurants', updatedRestaurants)

		// @ts-ignore
		const restaurantName = restaurantsWithReservations.find(
			// @ts-ignore
			(r) => r.id === restaurantId,
		).name
		setReservationMessage(
			`Столик зарезервирован в ${restaurantName} на ${selectedTime}!`,
		)
	}

	// Открытие модального окна
	const openReservationModal = (restaurant) => {
		setSelectedRestaurant(restaurant)
	}

	// Закрытие модального окна
	const closeReservationModal = () => {
		setSelectedRestaurant(null)
	}

	// Переход на страницу меню
	const goToMenu = (restaurantId) => {
		navigate(`/menu/${restaurantId}`)
	}

	return (
		<div className="p-6 bg-neutral min-h-screen">
			<h1 className="text-3xl font-bold text-textPrimary mb-6">
				Бронирование Ресторанов
			</h1>
			<Filter filters={filters} setFilters={setFilters} />

			{reservationMessage && (
				<div className="mb-6 p-4 bg-green-500 text-white rounded-md">
					{reservationMessage}
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredRestaurants.map((restaurant) => (
					<RestaurantCard
						key={restaurant.id}
						restaurant={restaurant}
						onReserve={() => openReservationModal(restaurant)}
						// @ts-ignore
						onViewMenu={() => goToMenu(restaurant.id)} // Кнопка перехода к меню
					/>
				))}
			</div>

			{/* Модальное окно для резервации */}
			{selectedRestaurant && (
				<ReservationModal
					restaurant={selectedRestaurant}
					onClose={closeReservationModal}
					onReserve={handleReserve}
				/>
			)}
		</div>
	)
}

export default Home
