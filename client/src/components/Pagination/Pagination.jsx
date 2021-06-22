import React from 'react';

function Pagination({ breedsPerPage, totalBreeds,paginate}) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalBreeds / breedsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul>
				{pageNumbers.map((number) => (
					<li key={number}>
						<a onClick={()=> paginate(number)} href='!#'>{number}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Pagination;
