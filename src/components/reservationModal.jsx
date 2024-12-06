import React, { useState } from 'react'

const ReservationModal = ({ restaurant, onClose, onReserve }) => {
	const [selectedTable, setSelectedTable] = useState(null)
	const [selectedTime, setSelectedTime] = useState('')

	// Обновление выбранного столика
	const handleTableChange = (tableId) => {
		const table = restaurant.tables.find((t) => t.id === parseInt(tableId))
		setSelectedTable(table)
		setSelectedTime('') // сброс времени при смене столика
	}

	// Обновление выбранного времени
	const handleTimeChange = (e) => {
		setSelectedTime(e.target.value)
	}

	const handleReserve = () => {
		if (selectedTable && selectedTime) {
			// @ts-ignore
			onReserve(restaurant.id, selectedTable.id, selectedTime)
			onClose()
		} else {
			alert('Пожалуйста, выберите столик и время.')
		}
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white rounded-lg shadow-lg p-6 w-96">
				<h2 className="text-2xl font-semibold mb-4 text-center">
					Бронирование в {restaurant.name}
				</h2>
				<div className="mb-4">
					<label className="block font-medium mb-2">Выберите столик:</label>
					<select
						className="w-full border border-gray-300 rounded-md p-2"
						onChange={(e) => handleTableChange(e.target.value)}
					>
						<option value="">-- Выберите столик --</option>
						{restaurant.tables.map((table) => (
							<option key={table.id} value={table.id}>
								Столик {table.id} ({table.seats} мест)
							</option>
						))}
					</select>
				</div>
				{selectedTable && (
					<div className="mb-4">
						<label className="block font-medium mb-2">Выберите время:</label>
						<select
							className="w-full border border-gray-300 rounded-md p-2"
							onChange={handleTimeChange}
							value={selectedTime}
						>
							<option value="">-- Выберите время --</option>
							{selectedTable// @ts-ignore
							.availableTimes
								.map((time, index) => (
									<option key={index} value={time}>
										{time}
									</option>
								))}
						</select>
					</div>
				)}
				<div className="flex justify-between">
					<button
						className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
						onClick={onClose}
					>
						Отмена
					</button>
					<button
						className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
						onClick={handleReserve}
					>
						Забронировать
					</button>
				</div>
			</div>
		</div>
	)
}

export default ReservationModal
