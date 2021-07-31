import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreeds, setLoading } from '../../Store/Actions/indexActions';
import { Link } from 'react-router-dom';
import style from './Cards_3D.module.css';

/************************************CON HOOKS***********************/

function Cards_3D({ input, setInput }) {
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setLoading());
		dispatch(getBreeds());
	}, [dispatch]);

	const breeds = useSelector((state) => state.breeds);
	const loading = useSelector((state) => state.loading);
	const filteredBreeds = useSelector((state) => state.filteredBreeds);

	const [currentPage, setcurrentPage] = useState(0);
	const nextPage = () => {
		setcurrentPage(currentPage + 8);
	};
	const prevPage = () => {
		if (currentPage > 0) setcurrentPage(currentPage - 8);
	};

	const numberPage = currentPage / 8 + 1;

	/************************ render funtion  ***************/
	function displayBreeds(array) {
		if (array.length === 0) {
			return (
				<div className={style.error_render}>
					<img src='https://acegif.com/wp-content/gif/smiling-dog-4.gif' alt='no paso nada' />
					<h1>Ups!!!</h1>
					<h2>....An unexpected situation has arisen.</h2>
					<button className={style.btn_error} onClick={() => (window.location.href = '/home')}>
						Click me and try again
					</button>
				</div>
			);
		}

		let breedsToDisplay = array?.filter((b) => b.name.toLowerCase().includes(input.toLowerCase()));

		return breedsToDisplay.length ? (
			breedsToDisplay
				.map((b) => {
					return (
						<div key={b.id} className={style.card_father}>
							<div className={style.card}>
								<div className={style.card_front}>
									<div className={style.bg}></div>
									<div className={style.body_card_front}>
										<p className={style.p}>{b.name}</p>
										<img className={style.image} src={b.image} alt='Not found' />
									</div>
								</div>
								<div className={style.card_back}>
									<div className={style.body_card_back}>
										<p className={style.p1}>TEMPERAMENTS</p>

										{b.id.length ? (
											<div>
												{b.temperaments.map((t) => {
													return <p key={t.id} className={style.p1}>{t.name}</p>;
												})}
											</div>
										) : (
											<p className={style.p1}>{b.temperament}</p>
										)}
										<Link to={`/home/${b.id}`}>
											<button className={style.btn_more_info}>More information</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					);
				})
				.slice(currentPage, currentPage + 8)
		) : (
			<div className={style.error_render}>
				<h1>Ups!!!!</h1>
				<h2>We couldn't find the breed you are looking for. Please try again</h2>
				<h2>And good luck</h2>
				<img src='https://acegif.com/wp-content/gif/smiling-dog-4.gif' alt='no paso nada' />
				<button className={style.btn_error} onClick={() => (window.location.href = '/home')}>
					Go back home
				</button>
			</div>
		);
	}

	/************************ return of the function ******************/
	return (
		<div>
			<div className={style.cards_container}>
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
				<p className={style.btn}>{numberPage}</p>

				<button className={style.btn} onClick={nextPage}>
					Next
				</button>
			</div>
		</div>
	);
}
export default Cards_3D;
