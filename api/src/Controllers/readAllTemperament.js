require('dotenv').config();
const axios = require('axios');
const { Temperament } = require('../db');
const { API_KEY } = process.env;

async function readAllTemperament(req, res, next) {
	const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

	const allBreed = data.map((b) => {
		return b.temperament;
	});

	const allJoin = allBreed.map((e) => {
		return e && e.split(', ');
	});

	const order = allJoin.flat().sort();

	const dataArray = new Set(order);
	let result = [...dataArray];

	const temp = result.map((c) => {
		return {
			name: c || 'Could not get name',
		};
	});

	const temperamentDB = await Temperament.bulkCreate(temp);
	// console.log(temperamentDB);
	res.send(temperamentDB);
}

module.exports = readAllTemperament;
