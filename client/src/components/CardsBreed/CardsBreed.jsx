import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreeds, setLoading } from '../../Store/Actions/indexActions';
import { Link } from 'react-router-dom';
import style from './CardsBreed.module.css';

/************************************CON HOOKS***********************/

function CardsBreed({ input, setInput }) {
	const dispatch = useDispatch();

	

	useEffect(() => {
		dispatch(setLoading());
		dispatch(getBreeds());
	}, [dispatch]);

	const breeds = useSelector((state) => state.breeds);
	const loading = useSelector((state) => state.loading);
	const filteredBreeds = useSelector((state) => state.filteredBreeds);
		

	const [currentPage, setcurrentPage] = useState(0);
	const nextPage =  () => {
		 setcurrentPage(currentPage + 12);
	};
	const prevPage =  () => {
		if (currentPage > 0)  setcurrentPage(currentPage - 12);
	};

	const numberPage = currentPage / 12 + 1;

	function displayBreeds(array) {
		if (array.message) {
			return (
				<div>
					<p>We couldn't find the breed you are looking for, please try again</p>
					<i className='fas fa-spinner fa-spin spinner'></i>
					<button onClick={() => (window.location.href = '/home')}>Go back</button>
				</div>
			);
		}

		let breedsToDisplay = array?.filter((b) => b.name.toLowerCase().includes(input.toLowerCase()));
		

		return breedsToDisplay.length ? (
			breedsToDisplay.map((b) => {
				return (
					<div className={style.body}>
						<p className={style.p}>{b.name}</p>
						<Link to={`/home/${b.id}`}>
							<div>
								<img className={style.image} src={b.image} alt='Not found' />
							</div>
						</Link>

						{b.id.length ? (
							<div>
								{b.temperaments.map((t) => {
									
									return <p className={style.p1}>{t.name}</p>;
								})}
							</div>
						) : (
							<p className={style.p1}>{b.temperament}</p>
						)}
					</div>
				);
			}).slice(currentPage, currentPage + 8)
		) : (
			<div>
				<h1>We couldn't find the breed.</h1>
				<img src='https://acegif.com/wp-content/gif/smiling-dog-4.gif' alt='no paso nada' />
				<button onClick={() => (window.location.href = '/home')}>Go back home</button>
			</div>
		);
	}

	return (
		<div>
			<div className={style.cards}>
				{loading ? (
					<i className='fas fa-spinner fa-spin spinner'></i>
				) : filteredBreeds.length > 0 ? (
					displayBreeds(filteredBreeds)
				) : (
					displayBreeds(breeds)
				)}
				
			</div>

			
			<div className={style.paginado}>
				<button className={style.btn} onClick={prevPage}>
					Previus
				</button>
				<button className={style.btn}>{numberPage}</button>

				<button className={style.btn} onClick={nextPage}>
					Next
				</button>
			</div>
		</div>
	);
}
export default CardsBreed;

/*************** con REACT **********/
// function CardsBreed() {
// 	const [breeds, setBreeds] = useState([]);

// 	function getBreeds() {
// 		return axios.get('http://localhost:3001/breeds').then((breeds) => setBreeds(breeds.data));
// 	}
// 	useEffect(() => {
// 		getBreeds();
// 	},[]);

// 	return (
// 		<div className={style.cards}>
// 			{breeds?.map((b) => (
// 				<Card id={b.id} name={b.name} image={b.image} temperament={b.temperament} />
// 			))}
// 		</div>
// 	);
// }

// export default CardsBreed;

/*************** con REACT-REDUX**********/
/*
function CardsBreed({breeds, getBreeds}) {

	

	//  function getBreeds() {
	//  	return axios.get('http://localhost:3001/breeds').then((breeds) => setBreeds(breeds.data));
	//  }
	 function getBreedsFunction() {
		 	getBreeds();
	 	 }
		  
useEffect(() => {
	//getBreeds();
	getBreedsFunction()
}, [])

	return (
		<div>
			{breeds?.map((b) => (
				<Card id={b.id} name={b.name} image={b.image} temperament={b.temperament} />
			))}
			<p>hola estas en CardBreed</p>
			<Card />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		breeds: state.breeds,
	};
};

const mapDispachToprops = (dispatch) => {
	return {
		getBreeds: (breeds) => {
			dispatch(getBreeds(breeds));
		},
	};
};

export default connect(mapStateToProps, mapDispachToprops)(CardsBreed);
*/
