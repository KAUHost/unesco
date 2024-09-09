import useInViewAnimation from '../../hooks/useInViewAnimation'
import s from './Footer.module.scss'

export default function Footer() {
	const { ref: footerRef, isInView: footerInView } =
		useInViewAnimation<HTMLElement>()

	return (
		<footer ref={footerRef} className={footerInView ? s.animate : ''}>
			<div className={s.link}>
				<span>джерело інформації</span>
				<div>
					<a className='btn_linia' target="_blank" href='https://whc.unesco.org/'>
						тик
					</a>
					<a className='btn_linia' target="_blank" href='https://whc.unesco.org/ru/list/'>
						тик
					</a>
					<a className='btn_linia' target="_blank" href='https://whc.unesco.org/en/list/'>
						тик
					</a>
				</div>
			</div>
			<div className={s.percent}>
				<div className={s.percentage_bar}>
					<div className={s.ts}></div>
					<div className={s.scss}></div>
					<div className={s.html}></div>
				</div>
				<div className={s.dots}>
					<a className={`${s.TS} btn_linia`} target="_blank" href='https://uk.wikipedia.org/wiki/TypeScript'>
						<div></div>
						<span>TS<span>50.4%</span></span>
					</a>
					<a className={`${s.SCSS} btn_linia`} target="_blank" href='https://uk.wikipedia.org/wiki/Sass'>
						<div></div>
						<span>SCSS<span>41.3%</span></span>
					</a>
					<a className={`${s.HTML} btn_linia`} target="_blank" href='https://uk.wikipedia.org/wiki/HTML'>
						<div></div>
						<span>HTML<span>5.7%</span></span>
					</a>
					<a className={`${s.JS} btn_linia`} target="_blank" href='https://uk.wikipedia.org/wiki/JavaScript'>
						<div></div>
						<span>JS<span>2.6%</span></span>
					</a>
				</div>
			</div>
		</footer>
	)
}
