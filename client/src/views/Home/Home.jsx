import React  from 'react';
//import CardsBreed from '../../components/CardsBreed/CardsBreed';
import Cards3D from '../../components/Cards_3D/Cards_3D';
import Filter from '../../components/Filter/Filter';
import style from './Home.module.css';

function Home({ input, setInput }) {
	return (
		<div className={style.body}>
			<div>
				<Filter />
			</div>

			{/* <div >
				<CardsBreed input={input} setInput={setInput} />
			</div> */}
			<div>
				<Cards3D input={input} setInput={setInput} />
			</div>
		</div>
	);
}

export default Home;
