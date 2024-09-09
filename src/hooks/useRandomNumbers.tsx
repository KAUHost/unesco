import { useEffect, useState } from 'react'

const useRandomNumbers = (
	finalNumber: number,
	duration: number,
	isActive: boolean
) => {
	const [number, setNumber] = useState<string>(
		finalNumber.toString().padStart(4, '0')
	)
	const [isRunning, setIsRunning] = useState(false)

	useEffect(() => {
		if (!isActive) return

		setIsRunning(true)

		const generateRandomNumber = () => {
			return Math.floor(Math.random() * 10000)
				.toString()
				.padStart(4, '0')
		}

		const intervalId = setInterval(() => {
			setNumber(generateRandomNumber())
		}, 100) // Інтервал в 300 мс для більш плавної зміни чисел

		const timeoutId = setTimeout(() => {
			clearInterval(intervalId)
			setNumber(finalNumber.toString().padStart(4, '0'))
			setIsRunning(false)
		}, duration)

		return () => {
			clearInterval(intervalId)
			clearTimeout(timeoutId)
		}
	}, [finalNumber, duration, isActive])

	return number
}

export default useRandomNumbers
