import React from 'react'
import { useState } from 'react'

const ReservationModal = ({ restaurant, onClose, onReserve }) => {
	const [selectedTime, setSelectedTime] = useState('')

	const availableTimes = restaurant.availableTimes.filter(
		(time) => !restaurant.reservations.includes(time),
	)

	const handleReserve = () => {
		if (selectedTime) {
			onReserve(restaurant.id, selectedTime)
			onClose()
		} else {
			alert('Please select a time')
		}
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white p-6 rounded-md shadow-lg w-80">
				<h2 className="text-xl font-bold mb-4">
					{restaurant.name} Бронирование
				</h2>
				<p className="text-sm mb-4">{restaurant.description}</p>

				<div className="mb-4">
					<select
						className="p-2 rounded-md w-full"
						value={selectedTime}
						onChange={(e) => setSelectedTime(e.target.value)}
					>
						<option value="">Выберите время</option>
						{availableTimes.map((time) => (
							<option key={time} value={time}>
								{time}
							</option>
						))}
					</select>
				</div>

				<div className="flex justify-between">
					<button
						className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
						onClick={handleReserve}
					>
						Зарезервировать
					</button>
					<button
						className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
						onClick={onClose}
					>
						Закрыть
					</button>
				</div>
			</div>
		</div>
	)
}

export default ReservationModal
