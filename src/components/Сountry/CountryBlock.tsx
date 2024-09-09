import useInViewAnimation from '../../hooks/useInViewAnimation'
import useRandomNumbers from '../../hooks/useRandomNumbers'
import s from './Сountry.module.scss'

interface CountryBlockProps {
	year?: number
	title?: string
	text?: string
	img?: string
	reversed?: boolean
	className?: string // Додаємо className у пропси
}

export default function CountryBlock({
	year,
	title,
	text,
	img,
	reversed,
	className,
}: CountryBlockProps) {
	const { ref: blockRef, isInView: blockInView } =
		useInViewAnimation<HTMLDivElement>()
	const animatedYear = useRandomNumbers(year || 0, 500, blockInView) // 500 ms duration for animation

	// Застосовуємо className, якщо він є, і перевіряємо його
	const dynamicClass = className && s[className] ? s[className] : ''

	return (
		<div
			ref={blockRef}
			className={`${reversed ? s.country_block_reversed : s.country_block} ${
				blockInView ? s.animate : ''
			} ${dynamicClass}`}
		>
			{year && (
				<div title="Рік внесення" className={s.year}>
					<h2>{blockInView ? animatedYear : year}</h2>
				</div>
			)}
			<div className={s.layout}>
				<div className={s.text_info}>
					{title && <h2>{title}</h2>}
					{text && <p>{text}</p>}
				</div>
				<div className={s.image_container}>
					<img src={`/unesco/img/country/${img}`} alt={title || ''} />
					<div></div>
				</div>
			</div>
		</div>
	)
}
