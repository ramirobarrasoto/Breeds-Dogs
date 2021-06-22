import {
	GET_BREEDS,
	GET_BREED,
	GET_BREEDS_ID,
	ASC,
	DESC,
	MINMAX,
	MAXMIN,
	DB,
	API,
	GET_TEMPERAMENT,
	SET_LOADING,
	FILTER,
} from '../Actions/indexActions';

const initialState = {
	breeds: [],
	searchedBreed: [],
	breedsDetail: {},
	breedsLoader: [],
	temperaments: [],
	filteredBreeds: [],
	loading: false,
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case GET_BREEDS:
			return {
				...state,
				loading: false,
				breeds: action.payload,
			};
		case GET_BREED:
			return {
				...state,
				searchedBreed: action.payload,
			};
		case GET_BREEDS_ID:
			return {
				...state,
				breedsDetail: action.payload,
			};
		case ASC:
			return {
				...state,
				breeds: state.breeds
					.filter((b) => b.name !== null)
					.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
			};

		case DESC:
			return {
				...state,
				breeds: state.breeds
					.filter((b) => b.name !== null)
					.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
			};
		case MINMAX:
			return {
				...state,
				breeds: state.breeds.filter((b) => b.weight !== null).sort((a, b) => (a.weight < b.weight ? 1 : -1)),
			};
		case MAXMIN:
			return {
				...state,
				breeds: state.breeds.filter((b) => b.weight !== null).sort((a, b) => (a.weight > b.weight ? 1 : -1)),
			};
		case DB:
			return {
				...state,
				breeds: state.breeds.filter((b) => b.id.length > 6).sort((a, b) => (a.id > b.id ? 1 : -1)),
			};
		case API:
			return {
				...state,
				breeds: state.breeds.filter((b) => b.id < 500),
			};
		case GET_TEMPERAMENT:
			return {
				...state,
				temperaments: action.payload,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case FILTER:
			return {
				...state,
				filteredBreeds: action.payload,
			};
		default:
			return state;
	}
};
export default reducers;
