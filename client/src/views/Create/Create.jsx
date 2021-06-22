import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getTemperaments } from '../../Store/Actions/indexActions';

import style from './Create.module.css';

function validate(input) {
	let errors = {};
	if (!input.name) {
		errors.name = 'You must type a name';
	} else {
		errors.name = '';
	}
	if (!input.weight) {
		errors.weight = 'You must type a weight range';
	} else if (!/\d{1,2}-\d{1,2}/g.test(input.weight)) {
		errors.weight = "Weight must be a range. Example: '10-15'";
	} else {
		errors.weight = '';
	}

	if (!input.height) {
		errors.height = 'You must type a height range';
	} else if (!/\d{1,2}-\d{1,2}/g.test(input.height)) {
		errors.height = "Height must be a range. Example: '10-15'";
	} else {
		errors.height = '';
	}
	if (!input.life_span) {
		errors.life_span = 'You must type a life span';
	} else if (!/\d{1,2}-\d{1,2}/g.test(input.life_span)) {
		errors.life_span = "Life span must be a range. Example: '10-15'";
	} else {
		errors.life_span = '';
	}
	return errors;
}

function Create() {
	// manejo del estado de los errores
	const [errors, setErrors] = useState({});
	// manejo del estado de
	const [touched, setTouched] = useState({});
	// manejo del estado de las input
	const [input, setInput] = useState({
		name: '',
		height: '',
		weight: '',
		life_span: '',
		temperament: [],
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTemperaments());
	}, []);

	const temperaments = useSelector((state) => state.temperaments);

	//funcion para manejar el name del input y setear el estado, o un posible error y setear el estado
	function handleInput(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	}
	// funcion para manejar la seleccion de temperamentos
	function handleSelect(e) {
		if (input.temperament.includes(parseInt(e.target.value))) {
			alert('You already selected this temperament. Try again.');
		} else if (input.temperament.length >= 3) {
			alert('You can select up to 3 temperaments.');
		} else {
			setInput((prev) => ({ ...prev, temperament: [...prev.temperament, parseInt(e.target.value)] }));
		}
	}
	//funcion para manejar el submit de la info
	function handleSubmit(e) {
		e.preventDefault();
		if (!errors.name && !errors.weight && !errors.height && !errors.life_span) {
			axios
				.post('http://localhost:3001/breeds', input)
				.then((r) => {
					alert('Breed created successfully!');
					setInput({
						name: '',
						height: '',
						weight: '',
						life_span: '',
						temperament: [],
					});
				})
				.catch((res) => alert('We could not create breed. Please try again.'));
		} else {
			alert('Something went wrong. Please try again.');
		}
	}
	//funcion para eliminar los temperamentos que elegimos mal
	function deleteTemp(e, t) {
		setInput((prev) => ({ ...prev, temperament: prev.temperament.filter((temp) => temp !== parseInt(t)) }));
	}
	//funcion para colocar todos los temperamentos seleccionados en un array
	function getNames(arr) {
		let names = [];
		temperaments.forEach((t) => {
			arr.forEach((id) => {
				if (parseInt(id) === t.id) {
					names.push(t.name);
				}
			});
		});
		return names;
	}

	return (
		<div className={style.body}>
			<form onSubmit={handleSubmit} className={style.form}>
				<div>
					<h2 className={style.h2}>Create a Breed</h2>
				</div>
				<div>
					<p className={style.p}>Name</p>
					<input
						type='text'
						name='name'
						placeholder='write here'
						onChange={handleInput}
						required='required'
						value={input.name}
						className={style.input}
					/>
					{errors.name && touched.name && <p>{errors.name}</p>}
				</div>
				<div>
					<p className={style.p}>Weight</p>
					<input
						type='text'
						name='weight'
						placeholder='write here'
						onChange={handleInput}
						required='required'
						value={input.weight}
						className={style.input}
					/>
					{errors.weight && touched.weight && <p>{errors.weight}</p>}
				</div>
				<div>
					<p className={style.p}>Height</p>
					<input
						type='text'
						name='height'
						placeholder='write here'
						onChange={handleInput}
						required='required'
						value={input.height}
						className={style.input}
					/>
					{errors.height && touched.height && <p>{errors.height}</p>}
				</div>
				<div>
					<p className={style.p}>Life span</p>
					<input
						type='text'
						name='life_span'
						placeholder='write here'
						onChange={handleInput}
						required='required'
						value={input.life_span}
						className={style.input}
					/>
					{errors.life_span && touched.life_span && <p>{errors.life_span}</p>}
				</div>
				<div>
					<p className={style.p}>Temperaments</p>
					<select
						name='temperaments'
						onChange={(e) => handleSelect(e)}
						required
						value={input.temperament}
						className={style.input}
					>
						<option>Select</option>
						{temperaments.map((e) => (
							<option value={e.id} key={e.id}>
								{e.name}
							</option>
						))}
					</select>
				</div>
				<div>
					{input.temperament.map((t) => (
						<p id={t} className={style.temperament}>
							{getNames([t])}{' '}
							<button type='button' onClick={(e) => deleteTemp(e, t)} className={style.btn_X}>
								-x-
							</button>
						</p>
					))}
				</div>

				<button type='submit' className={style.btn}>
					Submit
				</button>
			</form>
		</div>
	);
}
export default Create;
