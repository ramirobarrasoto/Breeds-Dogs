import React from 'react';
import PropTypes from 'prop-types';
import style from './NewBreed.module.css'

export default function NewBreed({ breed, deletebreed }) {
	return (
		<div className={style.body}>
			<div>
				<p>
					Name: <span>{breed.name}</span>
				</p>
			</div>
			<div>
				<p>
					Height: <span>{breed.height}</span>
				</p>
			</div>
			<div>
				<p>
					Weight: <span>{breed.weight}</span>
				</p>
			</div>
			<div>
				<p>
					Life_span: <span>{breed.life_span}</span>
				</p>
			</div>
			<div>
				<p>
					Temperament: <span>{breed.temperament}</span>
				</p>
			</div>
		</div>
	);

    
}
NewBreed.propTypes = {
    breed: PropTypes.object.isRequired,
    deleteBreed: PropTypes.func.isRequired,
};