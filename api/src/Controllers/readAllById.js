require('dotenv').config();
const axios = require('axios');
const { Breed, Temperament } = require('../db');
const { API_KEY } = process.env;

async function readAllById(req, res) {
	const { id } = req.params;

	try {
		if (id.length > 6) {
			
			const breedDB = await Breed.findByPk(id, {
				include:{
					model:Temperament
				}
			});
			console.log(breedDB);
			return res.json(breedDB);
		} else {
			const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?apikey=${API_KEY}`);

			const breed = {
				id: data.id,
				name: data.name,
				image: 'https://cdn2.thedogapi.com/images/' + data.reference_image_id + '.jpg',
				weight: data.weight.metric,
				height: data.height.metric,
				life_span: data.life_span,
				temperament:data.temperament,
			};
			console.log(breed);

			res.send(breed);
		}
	} catch (error) {
		return res.status(400).send('BREED NOT FOUND');
	}
}

module.exports = readAllById;
