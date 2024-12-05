import { useParams, useNavigate } from 'react-router-dom'
import { restaurants } from '../data/restaurants'
import React, { useState } from 'react'

const RestaurantMenu = () => {
	const { id } = useParams()
	// @ts-ignore
	const restaurant = restaurants.find((r) => r.id === parseInt(id))
	const navigate = useNavigate()

	const [cart, setCart] = useState([])

	if (!restaurant) {
		return <p>Ресторан не найден</p>
	}
	const addToCart = (dish) => {
		// @ts-ignore
		setCart((prevCart) => [...prevCart, dish])
	}
	const clearCart = () => {
		setCart([])
	}

	const totalItems = cart.length
	// @ts-ignore
	const totalPrice = cart.reduce(
		// @ts-ignore
		(sum, dish) => Number(sum) + Number(dish.price),
		0,
	)

	return (
		<div className="relative bg-gray-100 min-h-screen">
			<div className="fixed top-0 left-0 w-full bg-white shadow-md z-10 p-4 flex justify-between items-center">
				<button
					className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
					onClick={() => navigate(-1)}
				>
					Назад
				</button>
				<div className="text-lg font-bold text-gray-800">
					<span>Блюд: {totalItems}</span>
					{' | '}
					<span>Сумма: {totalPrice} ₽</span>
				</div>
				<button
					className={`ml-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all ${
						totalItems === 0 ? 'opacity-50 cursor-not-allowed' : ''
					}`}
					onClick={clearCart}
					disabled={totalItems === 0}
				>
					Очистить корзину
				</button>
			</div>

			<div className="pt-20 px-6">
				<h1 className="text-4xl font-extrabold text-gray-900 mb-4">
					{restaurant.name}
				</h1>
				<hr className="border-green-500 border-t-2 w-1/3 mb-6" />
				<p className="text-lg mb-6 text-gray-700">{restaurant.description}</p>
				<h2 className="text-3xl font-bold text-gray-800 mb-4">Меню</h2>
				<hr className="border-green-500 border-t-2 w-1/5 mb-8" />

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{restaurant.menu.map((dish) => (
						<div
							key={dish.id}
							className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
						>
							<div
								className="h-64 bg-cover bg-center"
								style={{ backgroundImage: `url(${dish.image})` }}
							></div>
							<div className="p-6">
								<h3 className="text-2xl font-semibold text-gray-800">
									{dish.name}
								</h3>
								<hr className="border-red-500 border-t-2 my-3" />
								<p className="text-gray-600">{dish.description}</p>
								<p className="text-lg font-bold text-green-500 mt-4">
									{dish.price} ₽
								</p>
								<button
									className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all"
									onClick={() => addToCart(dish)}
								>
									Добавить в корзину
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default RestaurantMenu
