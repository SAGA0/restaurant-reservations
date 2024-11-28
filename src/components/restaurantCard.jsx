import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RestaurantCard = ({ restaurant, onReserve }) => {
	const navigate = useNavigate()

	// Состояние для переключения описания
	const [isFullDescription, setIsFullDescription] = useState(true)

	// Функция для переключения описания
	const toggleDescription = () => {
		setIsFullDescription(!isFullDescription)
	}

	return (
		<div className="relative rounded-lg overflow-hidden shadow-lg bg-white">
			{/* Картинка ресторана с фоновой накладкой для перехода */}
			<div
				className="relative h-64 bg-cover bg-center"
				style={{ backgroundImage: `url(${restaurant.image})` }}
			>
				<div
					className="absolute inset-0 bg-black bg-opacity-40 z-10 cursor-pointer"
					onClick={() => navigate(`/restaurant/${restaurant.id}`)} // Переход на страницу ресторана
				></div>
			</div>

			{/* Информация о ресторане */}
			<div className="p-4">
				<h2 className="text-2xl font-semibold text-gray-800">
					{restaurant.name}
				</h2>
				<hr className="border-green-500 border-t-2 mt-1 w-52 mb-2" />
				<p className="text-sm text-gray-500 mb-1">{restaurant.cuisine}</p>
				<p className="text-sm text-gray-500">⭐{restaurant.rating}</p>
				<hr className="border-yellow-400 border-t-2 mt-1 w-12 mb-2" />

				{/* Описание ресторана */}
				<div
					className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ease-in-out max-h-96 ${
						isFullDescription ? 'max-h-96' : 'max-h-16'
					}`}
				>
					{isFullDescription
						? restaurant.fullDescription
						: restaurant.shortDescription}
				</div>

				{/* Адрес и контактные данные */}
				{isFullDescription && (
					<div className="mt-4 text-gray-600">
						<p>
							<strong>Адрес:</strong> {restaurant.address}
						</p>
						<p>
							<strong>Контакты:</strong> {restaurant.contact}
						</p>
					</div>
				)}

				{/* Кнопка для переключения описания */}
				<button
					className="mt-2 text-blue-500 hover:text-blue-600"
					onClick={toggleDescription}
				>
					{isFullDescription ? 'Скрыть' : 'Подробнее'}
				</button>

				{/* Кнопка бронирования */}
				<button
					className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none transition-all duration-300"
					onClick={(e) => {
						e.stopPropagation() // Останавливает распространение клика на родительский элемент
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
