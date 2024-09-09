import React from 'react'
import { PageData } from '../../App'
import s from './Card.module.scss'

export interface CardProps {
	item: PageData
	setCurrentPage: (page: PageData | null) => void
}

export const Card: React.FC<CardProps> = ({ item, setCurrentPage }) => {
	return (
	  <div
		className={`scrollTopButton ${s.card} ${s[item.id]}`}
		key={item.id}
		onClick={() => {
		  window.scrollTo({ top: 0, behavior: 'smooth' });
		  setCurrentPage(item);
		}}
	  >
		<div>
		  <div className={s.img}>
			<img src={`/unesco/img/countryFlag/${item.id}.jpg`} alt=''/>
		  </div>
		  <div className={s.card_btn}>
			<p>{item.id}</p>
			<p>|</p>
			<p>{item.name}</p>
		  </div>
		</div>
		<div className={s.blur}>
		  <img src={`/unesco/img/countryFlag/${item.id}.jpg`} alt='' />
		</div>
	  </div>
	)
  }
  
