import React from 'react'
import { PageData } from '../../App'
import { Card } from './Card'
import s from './Card.module.scss'

interface CardGridProps {
	data: PageData[]
	cardsPerPage: number
	repetitions: number
	setCurrentPage: (page: PageData | null) => void
}

const Cards: React.FC<CardGridProps> = ({
	data,
	cardsPerPage,
	repetitions,
	setCurrentPage,
}) => {
	const groupedData = []
	for (let i = 0; i < data.length; i += cardsPerPage) {
		groupedData.push(data.slice(i, i + cardsPerPage))
	}

	return (
		<div className={s.main}>
			{repetitions <= 2 ? (
				// If repetitions are 2 or fewer, render all cards in one block without group_block
				<div className={s.flex_block}>
					{data.map(item => (
						<Card
							key={item.name}
							item={item}
							setCurrentPage={setCurrentPage}
						/>
					))}
				</div>
			) : (
				// If repetitions are more than 2, render with specified repetitions
				groupedData.map((group, groupIndex) => {
					const uniqueId = `group_block_${groupIndex}` // Генеруємо унікальний ID

					return (
						<div
							key={groupIndex}
							id={uniqueId}
							className={`${s.group_block} ${s[uniqueId]}`}
						>
							{Array.from({ length: repetitions }).map((_, repetitionIndex) => (
								<div
									key={repetitionIndex}
									className={`${s.repetition_block} ${
										s[`repetition_block_${repetitionIndex + 1}`] ||
										`repetition_block_${repetitionIndex + 1}`
									}`}
								>
									{group.map(item => (
										<Card
											key={`${item.name}-${repetitionIndex}`}
											item={item}
											setCurrentPage={setCurrentPage}
										/>
									))}
								</div>
							))}
						</div>
					)
				})
			)}
		</div>
	)
}

export default Cards
