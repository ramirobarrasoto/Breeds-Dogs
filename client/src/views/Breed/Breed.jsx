import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreedsById } from '../../Store/Actions/indexActions';

import style from './Breed.module.css';

/************ CON HOOKS ************* */

function Breed({ match }) {
	const id = match.params.id;
	

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBreedsById(id));
	}, [dispatch,id]);

	const breedsDetail = useSelector((state) => state.breedsDetail);
	

	return (
		<div className={style.body}>
			<div className={style.container}>
				<div className={style.box}>
					<h2 className={style.h2}>General information</h2>
					<div className={style.container}>
						<p className={style.p}>ID: </p>
						<p className={style.p1}>{breedsDetail.id}</p>
					</div>
					<div className={style.container}>
						<p className={style.p}>Breed name: </p>
						<p className={style.p1}>{breedsDetail.name}</p>
					</div>
					<div className={style.container}>
						<p className={style.p}>Height (metric): </p>
						<p className={style.p1}>{breedsDetail.height}</p>
					</div>
					<div className={style.container}>
						<p className={style.p}>Weight in kg: </p>
						<p className={style.p1}>{breedsDetail.weight}</p>
					</div>
					<div className={style.container}>
						<p className={style.p}>Life span: </p>
						<p className={style.p1}>{breedsDetail.life_span}</p>
					</div>
					<div className={style.container}>
						<p className={style.p}>Temperaments: </p>

						{breedsDetail.id?.length ? (
							<div>
								{breedsDetail.temperaments.map((t) => {
									return <p className={style.p1}>{t.name}</p>;
								})}
							</div>
						) : (
							<p className={style.p1}>{breedsDetail.temperament}</p>
						)}
					</div>
				</div>
				<div>
					<img className={style.image} src={breedsDetail.image} alt='Not found' />
				</div>
			</div>
		</div>
	);
}

export default Breed;
