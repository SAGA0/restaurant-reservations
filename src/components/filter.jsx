import React from 'react'

const Filter = ({ filters, setFilters }) => {
	const cuisines = ['Все', 'Японская', 'Американская', 'Итальянская']

	return (
		<div className="flex flex-col md:flex-row gap-4 mb-6">
			<select
				className="p-2 border rounded-md bg-neutral textPrimary focus:outline-primary"
				value={filters.cuisine}
				onChange={(e) => setFilters({ ...filters, cuisine: e.target.value })}
			>
				{cuisines.map((cuisine) => (
					<option key={cuisine} value={cuisine}>
						{cuisine}
					</option>
				))}
			</select>

			{/* Фильтр по рейтингу */}
			<select
				className="p-2 border rounded-md bg-neutral textPrimary focus:outline-primary"
				value={filters.rating}
				onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
			>
				<option value="0">Все</option>
				<option value="1">⭐ 1 Звезда</option>
				<option value="2">⭐⭐ 2 Звезды</option>
				<option value="3">⭐⭐⭐ 3 Звезды</option>
				<option value="4">⭐⭐⭐⭐ 4 Звезды</option>
				<option value="5">⭐⭐⭐⭐⭐ 5 Звезд</option>
			</select>
		</div>
	)
}

export default Filter
