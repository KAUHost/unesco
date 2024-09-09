import React, { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';
import s from './Header.module.scss';

interface Props {
  onHomeClick?: () => void;
  countryId?: string;
  countryFlag?: string;
  countryName?: string;
  onRandomCountryClick?: () => void;
}

export const Header: React.FC<Props> = ({
  onHomeClick,
  countryId,
  countryName,
  onRandomCountryClick,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrolledUp = scrollPosition > currentScrollPos;

    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (documentHeight > windowHeight) {
      setIsVisible(isScrolledUp);
    } else {
      setIsVisible(true);
    }

    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header className={`${s.header} ${isVisible ? s.visible : s.hidden}`}>
      <div className={s.btn}>
        <button
          className={`scrollTopButton btn_linia ${s.btn_linia}`}
          onClick={onHomeClick}
        >
          home
        </button>
        <button
          className={`scrollTopButton btn_linia ${s.btn_linia}`}
          onClick={onRandomCountryClick}
        >
          random
        </button>
        <button className='btn_linia' onClick={() => toggleTheme()}>Тема</button>
      </div>
      <div className={s.counter_flag}>
        {countryId && (
          <button className='btn_linia'>
            <a target="_blank" href={`https://uk.wikipedia.org/wiki/${countryName}`}>
              {countryName}
            </a>
          </button>
        )}
        {countryId && <img src={`/unesco/img/countryFlag/${countryId}.jpg`} alt='' />}
      </div>
    </header>
  );
};
