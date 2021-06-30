import React from 'react';
import style from './SearchBar.module.css';

function SearchBar({ input, setInput }) {
	return (
		<div className={style.container}>
			<input className={style.input}
				type='text'
				value={input}
				placeholder='Type to search a Breed!'
				onChange={(e) => setInput(e.target.value)}
			></input>
		</div>
	);
}

export default SearchBar;
