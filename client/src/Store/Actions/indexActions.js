import axios from 'axios';

export const GET_BREEDS = 'GET_BREEDS';
export const GET_BREED = 'GET_BREED';
export const GET_BREEDS_ID = 'GET_BREEDS_ID';
export const ASC = 'ASC';
export const DESC = 'DESC';
export const MINMAX = 'MINMAX';
export const MAXMIN = 'MAXMIN';
export const DB = 'DB';
export const API = 'API';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';
export const SET_LOADING = 'SET_LOADING';
export const FILTER = 'FILTER';

export function getBreeds() {
	return function (dispatch) {
		return axios.get('/breeds').then((breeds) => {
			dispatch({
				type: 'GET_BREEDS',
				payload: breeds.data,
			});
		});
	};
}
export function getBreed(name) {
	return function (dispatch) {
		return axios.get(`/breeds?name=${name}`).then((breed) => {
			dispatch({
				type: 'GET_BREED',
				payload: breed.data,
			});
		});
	};
}
export function getBreedsById(id) {
	return function (dispatch) {
		return axios.get(`/breeds/${id}`).then((breeds) => {
		
			dispatch({
				type: 'GET_BREEDS_ID',
				payload: breeds.data,
			});
		});
	};
}
export function getTemperaments(id) {
	return function (dispatch) {
		return axios.get('/temperament').then((temperament) => {
			dispatch({
				type: 'GET_TEMPERAMENT',
				payload: temperament.data,
			});
		});
	};
}

export function getOrder(value) {
	if (value === 'ASC') {
		return {
			type: 'ASC',
		};
	} else {
		return {
			type: 'DESC',
		};
	}
}
export function getOrderByWeight(value) {
	if (value === 'MINMAX') {
		return {
			type: 'MINMAX',
		};
	} else {
		return {
			type: 'MAXMIN',
		};
	}
}
export function getSource(value) {
	if (value === 'DB') {
		return {
			type: 'DB',
		};
	} else if (value === 'API'){
		return {
			type: 'API',
		};
	}else {
		return (getBreeds())
	}
}
export function setLoading() {
	return {
		type: 'SET_LOADING',
	};
}
export function filter(value) {
	return {
		type: 'FILTER',
		payload: value,
	};
}
