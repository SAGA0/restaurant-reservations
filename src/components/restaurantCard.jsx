import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RestaurantCard = ({ restaurant, onReserve }) => {
	const navigate = useNavigate()

	const [isFullDescription, setIsFullDescription] = useState(false)

	const toggleDescription = () => {
		setIsFullDescription(!isFullDescription)
	}

	const openYandexMaps = (address) => {
		const baseUrl = 'https://yandex.ru/maps/?text='
		const encodedAddress = encodeURIComponent(address)
		window.open(`${baseUrl}${encodedAddress}`, '_blank')
	}

	return (
		<div className="relative group rounded-lg overflow-hidden shadow-md bg-white transition-transform transform hover:scale-102 hover:shadow-lg">
			<div
				className="relative h-64 bg-cover bg-center cursor-pointer"
				style={{
					backgroundImage: `url(${restaurant.image})`,
				}}
				onClick={() => window.open(restaurant.panoramaUrl, '_blank')}
			>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:bg-black/40 transition-all"></div>
			</div>
			<div className="p-6">
				<h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
					{restaurant.name}
				</h2>
				<p className="text-sm text-gray-500">{restaurant.cuisine}</p>
				<p className="text-sm text-yellow-500 font-semibold">
					⭐ {restaurant.rating}
				</p>

				<hr className="my-4 border-gray-300" />

				<div
					className={`text-gray-700 overflow-hidden transition-all duration-500 ease-in-out ${
						isFullDescription ? 'max-h-96' : 'max-h-12'
					}`}
				>
					{isFullDescription
						? restaurant.fullDescription
						: restaurant.shortDescription}
				</div>

				{isFullDescription && (
					<>
						<hr className="my-4 border-gray-300" />
						<div className="text-gray-600">
							<p>
								<strong>Адрес:</strong>{' '}
								<span
									className="text-blue-500 underline cursor-pointer hover:text-blue-700"
									onClick={() => openYandexMaps(restaurant.address)}
									title="Перейти на Яндекс.Карты"
								>
									{restaurant.address}
								</span>
							</p>
							<p>
								<strong>Контакты:</strong> {restaurant.contact}
							</p>
						</div>
					</>
				)}

				<button
					className="mt-4 flex items-center text-blue-500 hover:text-blue-600 focus:outline-none"
					onClick={toggleDescription}
				>
					<span className="mr-2">
						<svg
							className={`transform transition-transform ${
								isFullDescription ? 'rotate-180' : 'rotate-0'
							}`}
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M12 16l-6-6h12l-6 6z" />
						</svg>
					</span>
				</button>

				<hr className="my-4 border-gray-300" />

				<div className="mt-6 flex gap-4">
					<button
						className="w-1/2 py-2 px-4 text-white font-semibold rounded-md bg-green-500 hover:bg-green-600 shadow-md hover:shadow-lg transition-all"
						onClick={(e) => {
							e.stopPropagation()
							onReserve()
						}}
					>
						Бронь Стола
					</button>

					<button
						className="w-1/2 py-2 px-4 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-lg transition-all"
						onClick={(e) => {
							e.stopPropagation()
							navigate(`/restaurant/${restaurant.id}`)
						}}
					>
						Меню
					</button>
				</div>
			</div>
		</div>
	)
}

export default RestaurantCard
