import { useEffect, useState } from 'react'
import data from '../src/data/data'
import { ReactComponent as UpArrowIcon } from './assets/ico/button_up.svg'
import Cards from './components/Cards/Cards'
import Hello from './components/Hello/Hello'
import Country from './components/Сountry/Сountry'
import useScrollToTop from './hooks/useScrollTop'
import Footer from './shader/Footer/Footer'
import { Header } from './shader/Header/Header'
import s from './style/App.module.scss'
import './style/btn_linia.scss'

export interface PageData {
  id: string
  name: string
}

export interface CountryData {
  id: string
  year1?: string
  title1?: string
  text1?: string
  year2?: string
  title2?: string
  text2?: string
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageData | null>(null)
  const [previousPageIndex, setPreviousPageIndex] = useState<number | null>(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const cardsPerPage = 3
  const cardWidth = 300

  useScrollToTop('scrollTopButton')

  // Обчислення кількості повторень на основі ширини вікна
  const calculateRepetitions = () => {
    const repetitionGroupWidth = cardsPerPage * cardWidth
    return Math.ceil(windowWidth / repetitionGroupWidth) + 1
  }

  const repetitions = calculateRepetitions()

  // Слідкування за зміною розміру вікна
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Встановлення початкової сторінки
  useEffect(() => {
    const initialPage = data.find(item => item.id === 'home')
    setCurrentPage(initialPage || null)
  }, [])

  // Обробка кліку по випадковій країні
  const handleRandomCountryClick = () => {
    let randomIndex: number
    do {
      randomIndex = Math.floor(Math.random() * data.length)
    } while (randomIndex === previousPageIndex)

    setPreviousPageIndex(randomIndex)
    setCurrentPage(data[randomIndex])
  }

  return (
    <>
      <Header
        countryId={currentPage?.id}
        countryName={currentPage?.name}
        onHomeClick={() => setCurrentPage(null)}
        onRandomCountryClick={handleRandomCountryClick}
      />

      {!currentPage && (
        <>
          <Hello />
          <Cards
            data={data}
            cardsPerPage={cardsPerPage}
            repetitions={repetitions}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}

      {currentPage && <Country countryId={currentPage.id} />}

      <button className={`${s.button_up} scrollTopButton`}>
        <UpArrowIcon />
      </button>

      <Footer />
    </>
  )
}
