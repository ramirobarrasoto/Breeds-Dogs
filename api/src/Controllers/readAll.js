require('dotenv').config();
const axios = require('axios');
const { Breed, Temperament } = require('../db');
const { Op } = require('sequelize');
const { API_KEY } = process.env;

const readAll = async (req, res) => {
	const { q } = req.query;
	if (q) {
		const breedDB = Breed.findAll({
			where: {
				name: q,
			},
			include: {
				model: Temperament,
			},
		});

		const api = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${q}&apikey=${API_KEY}`);
		//.then((dog) => res.json(dog.data));
		const breed = api.data.map(async (b) => {
			return {
				id: b.id || 'Could not get id',
				name: b.name || 'Could not get name',
				image:
					'https://cdn2.thedogapi.com/images/' + b.reference_image_id + '.jpg' ||
					'https://i.blogs.es/ab74c7/fotografo-de-perros_-santos-roman-piccolo-italiano/450_1000.jpg',
				temperament: b.temperament || 'Could not get a temperament',
				weight: b.weight.metric || 'Could not get information',
				height: b.height.metric || 'Could not get information',
				life_span: b.life_span || 'Could not get information',
			};
		});

		const breedApi = await Promise.all(breed);

		Promise.all([breedDB, breedApi]).then((results) => {
			const [myBreedResult, apiBreedResult] = results;
			const response = myBreedResult.concat(apiBreedResult);
			res.send(response);
		});

		/*********************** read All **********************/
		
	} else {
		try {
			const breedDB = Breed.findAll({
				include: {
					model: Temperament,
				},
			});

			const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

			const breed = api.data.map(async (b) => {
				return {
					id: b.id || 'Could not get id',
					name: b.name || 'Could not get name',
					image:
						b.image.url ||
						'https://i.blogs.es/ab74c7/fotografo-de-perros_-santos-roman-piccolo-italiano/450_1000.jpg',
					temperament: b.temperament || 'Could not get a temperament',
					weight: b.weight.metric || 'Could not get information',
					height: b.height.metric || 'Could not get information',
					life_span: b.life_span || 'Could not get information',
				};
			});

			const breedApi = await Promise.all(breed);

			Promise.all([breedDB, breedApi]).then((results) => {
				const [myBreedResult, apiBreedResult] = results;
				const response = myBreedResult.concat(apiBreedResult);
				res.send(response);
			});
		} catch {
			return res.status(400).send('Breed not found');
		}
	}
};

module.exports = readAll;
