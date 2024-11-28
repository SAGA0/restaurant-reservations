export const loadFromLocalStorage = (key, fallback) => {
	const data = localStorage.getItem(key)
	return data ? JSON.parse(data) : fallback
}

export const saveToLocalStorage = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data))
}
