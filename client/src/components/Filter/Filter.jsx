import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder, getOrderByWeight, getSource, getTemperaments, filter } from '../../Store/Actions/indexActions';
import style from './Filter.module.css';

function Filter() {
	const dispatch = useDispatch();

	//obtenemos todos los temperamentos
	useEffect(() => {
		dispatch(getTemperaments());
	}, []);
	// los llevamos a una constante
	const temperaments = useSelector((state) => state.temperaments);
	const breeds = useSelector((state) => state.breeds);

	let [selectedTemp, setSelectedTemp] = useState('');

	let [tempToFilterBy, setTempToFilterBy] = useState([]);

	function handleClick() {
		let filteredBreeds = [];
		breeds?.forEach((b) => {
			if (b.id.length > 6) {
				b.temperaments.map((t) => (t.name === selectedTemp ? filteredBreeds.push(b) : null));
			} else {
				if (b.temperament.includes(selectedTemp)) {
					filteredBreeds.push(b);
				} else {
					return null;
				}
			}
		});

		dispatch(filter(filteredBreeds));
	}

	function handleChangeTemp(e) {
		setSelectedTemp(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setTempToFilterBy([...tempToFilterBy, selectedTemp]);
		handleClick();
	}

	function handleOrder(e) {
		dispatch(getOrder(e.target.value));
	}
	function handleOrderByWeight(e) {
		dispatch(getOrderByWeight(e.target.value));
	}
	function handleSource(e) {
		dispatch(getSource(e.target.value));
	}

	return (
		<div className={style.body}>
			<form className={style.container}>
				<p className={style.p}>Order by weight</p>
				<select className={style.input} onChange={handleOrderByWeight}>
					<option value=''>Select</option>
					<option value='MINMAX'>+ to -</option>
					<option value='MAXMIN'>- to +</option>
				</select>
			</form>
			<form className={style.container}>
				<p className={style.p}>Order alphabetically</p>
				<select className={style.input} onChange={handleOrder}>
					<option value=''>Select</option>
					<option value='ASC'>A-Z</option>
					<option value='DESC'>Z-A</option>
				</select>
			</form>
			<form className={style.container}>
				<p className={style.p}>By</p>
				<select  className={style.input} onChange={handleSource}>
					<option value=''>Select</option>
					<option value='DB'>DB</option>
					<option value='API'>API</option>
					<option value='ALL'>ALL</option>
				</select>
			</form>
			<form onSubmit={handleSubmit} className={style.package}>
				<div className={style.container}>
						<p className={style.p}>Filter by temperament</p>
				<select className={style.input} onChange={handleChangeTemp} name='temperaments' value={selectedTemp}>
					<option>All</option>
					{temperaments.map((e) => (
						<option value={e.name} key={e.id}>
							{e.name}
						</option>
					))}
				</select>
				</div>
			
				<div>
					<button className={style.btn} type='submit'>Filter</button>
				</div>
			</form>
		</div>
	);
}

export default Filter;
