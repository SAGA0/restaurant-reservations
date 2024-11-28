import { loadFromLocalStorage } from '../utils/localStorageUtils'

const defaultRestaurants = [
	{
		id: 1,
		name: 'Суши ВОК',
		cuisine: 'Японская',
		rating: 4.8,
		shortDescription: 'Лучшие суши города!',
		fullDescription:
			'Суши BOK предлагает широкий ассортимент суши, роллов и других традиционных японских блюд. Мы используем только свежие ингредиенты для достижения максимального вкуса.',
		image:
			'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80',
		address: 'ул. Чайковского, 30, Грозный',
		contact: '+7 456 789 01 23',
		availableTimes: ['9:30', '10:30', '12:30', '14:30', '17:30', '20:00'],
		reservations: [],
		menu: [
			{
				id: 101,
				name: 'Калифорния ролл',
				description: 'Краб, авокадо и огурец в рисе и нори.',
				price: '500 ₽',
				image:
					'https://avatars.mds.yandex.net/i?id=5d178b70ca2d2408cf3a6955917ced7efebd878d-4251039-images-thumbs&n=13',
			},
			{
				id: 102,
				name: 'Спайси тунец',
				description: 'Тунец с острым майонезным соусом.',
				price: '700 ₽',
				image:
					'https://avatars.mds.yandex.net/i?id=36a9ca0265a3eaa0e07e5030d92454af_l-5367291-images-thumbs&n=13',
			},
		],
	},
	{
		id: 2,
		name: 'Burger House',
		cuisine: 'Американская',
		rating: 2.8,
		shortDescription: 'Картошечка и Бургер.',
		fullDescription:
			'Burger House — это место, где вы найдете самые сочные бургеры, свежую картошку фри и крафтовые напитки. Отличный выбор для любителей американской кухни!',
		image:
			'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
		address: 'ул. Пушкина, 15, Грозный',
		contact: '+7 345 678 90 12',
		availableTimes: ['9:30', '10:30', '12:30', '14:30', '17:30', '20:00'],
		reservations: [],
		menu: [
			{
				id: 201,
				name: 'Чизбургер',
				description:
					'Классический бургер с сыром чеддер и маринованными огурцами.',
				price: '400 ₽',
				image:
					'https://avatars.mds.yandex.net/i?id=53ea840cc7b1579d9c8660ab4881241ad8cf0dfa-8386641-images-thumbs&n=13',
			},
			{
				id: 202,
				name: 'Беконбургер',
				description: 'Сочный бургер с хрустящим беконом и дымным BBQ соусом.',
				price: '550 ₽',
				image:
					'https://avatars.mds.yandex.net/i?id=08bb9c42b264c20b48fca855e86d4ccdde980aad-3794023-images-thumbs&n=13',
			},
		],
	},
	{
		id: 3,
		name: 'Pasta Paradise',
		cuisine: 'Итальянская',
		rating: 5,
		shortDescription: 'Пицца из каменной печи.',
		fullDescription:
			'Pizza World предлагает настоящую итальянскую пиццу, приготовленную в каменной печи. Насладитесь разнообразием вкусов и высоким качеством ингредиентов!',
		image: 'https://www.shkolazhizni.ru/img/content/i216/216938_or.jpg',
		address: 'ул. Ленина, 10, Грозный',
		contact: '+7 123 456 78 90',
		availableTimes: ['12:30', '14:30', '17:30', '20:00'],
		reservations: [],
		menu: [
			{
				id: 301,
				name: 'Салат из киноа',
				description: 'Киноа, свежие овощи, авокадо и легкая заправка.',
				price: '450 ₽',
				image:
					'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
			},
			{
				id: 302,
				name: 'Веганский бургер',
				description: 'Котлета из нута, свежие овощи и соус на основе авокадо.',
				price: '500 ₽',
				image:
					'https://avatars.mds.yandex.net/i?id=2cf84e5d01dbad0c1f78387269a8793dec40e4a90691b487-12753081-images-thumbs&n=13',
			},
		],
	},
	{
		id: 4,
		name: 'Pizza World',
		cuisine: 'Итальянская',
		rating: 4,
		shortDescription: 'Вкуснейшая паста.',
		fullDescription:
			'Pasta Paradise — это паста мечты! Мы готовим блюда по традиционным итальянским рецептам с использованием свежих и натуральных продуктов.',
		image: 'https://dlq00ggnjruqn.cloudfront.net/prometheus/getImage?id=90588',
		address: 'ул. Гагарина, 25, Грозный',
		contact: '+7 234 567 89 01',
		availableTimes: ['12:30', '14:30', '17:30', '20:00'],
		reservations: [],
		menu: [
			{
				id: 401,
				name: 'Маргарита',
				description:
					'Классическая пицца с томатным соусом, моцареллой и базиликом.',
				price: '600 ₽',
				image:
					'https://avatars.mds.yandex.net/i?id=ce7b8b33880ea079303781ebaeea3360178a1e0a-3475740-images-thumbs&n=13',
			},
			{
				id: 402,
				name: 'Пепперони',
				description: 'Пицца с моцареллой, томатным соусом и острой пепперони.',
				price: '750 ₽',
				image:
					'https://avatars.mds.yandex.net/i?id=db0ea28fa5bb6d29b530e2f7be76007bcf81afee-4575548-images-thumbs&n=13',
			},
		],
	},
]

export const restaurants = loadFromLocalStorage(
	'restaurants',
	defaultRestaurants,
)
