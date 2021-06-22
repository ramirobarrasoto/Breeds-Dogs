import React from 'react';
import {Link} from 'react-router-dom'
import style from './Card.module.css'

function Card({ id, name, image, temperament }) {
	return (
		<div className={style.body}>
			<p>{name}</p>
			<Link to={`/home/${id}`}>
				<div>
					<img className={style.image} src={image} alt='Not found' />
				</div>
			</Link>
		
			<div>{temperament}</div>
		</div>
	);
}

export default Card;
