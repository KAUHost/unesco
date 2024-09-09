import { useEffect } from 'react';

const useScrollToTop = (className: string) => {
  useEffect(() => {
    const elements = document.getElementsByClassName(className)

    if (elements.length === 0) return

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', handleClick)
    }

    return () => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener('click', handleClick)
      }
    };
  }, [className])
};

export default useScrollToTop;
