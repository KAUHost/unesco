import React, { useEffect, useState } from 'react';
import CountryBlock from './CountryBlock';
import s from './Сountry.module.scss';

interface CountryDataItem {
  id: number;
  year1?: number;
  title1?: string;
  text1?: string;
  year2?: number;
  title2?: string;
  text2?: string;
}

interface CountryProps {
  countryId: string;
}

export default function Country({ countryId }: CountryProps) {
  const [countryData, setCountryData] = useState<CountryDataItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await import(`../../data/country/${countryId}.json`);
        setCountryData(data.default);
      } catch (error) {
        console.error(`Помилка завантаження даних для країни ${countryId}:`, error);
      }
    }
    fetchData();
  }, [countryId]);

  return (
    <div className={s.main}>
      {countryData.map((item: CountryDataItem, index: number) => (
        <div key={item.id}>
          {item.year1 && (
            <CountryBlock
              year={item.year1}
              title={item.title1}
              text={item.text1}
              img={`${countryId}/el${index + 1}img1.png`}
              className={`_${index + 1}el1`}
            />
          )}
          
          {item.year2 && (
            <CountryBlock
              year={item.year2}
              title={item.title2}
              text={item.text2}
              img={`${countryId}/el${index + 1}img2.png`}
              className={`_${index + 1}el2`}
              reversed
            />
          )}
        </div>
      ))}
    </div>
  );
}
