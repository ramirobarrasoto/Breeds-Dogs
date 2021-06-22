import React from 'react';
import{Link} from 'react-router-dom'
import style from './LandingPage.module.css'

export default function LandigPage(params) {
	return (
		<div className={style.body}>
			
			
			<h3 className= {style.title}> dog breeds?</h3>
			<Link to='/Home' className={style.myButton}>
				click me</Link>
		</div>
	);
}
