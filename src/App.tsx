import React, { useEffect, useState } from "react";
import { getCountries } from "./api/api";
import { CountryType } from "./types/CountiesType";
import CountryList from "./component/CountryList";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);

  const onFavoriteCountry = (date) => {
    // name 같으면 isDone을 바꾸고 아니면 리턴
    const favorite: CountryType[] = countries.map((country) => {
      if (country.name.common === date) {
        return { ...country, isDone: !country.isDone };
      }
      return country;
    });
    setCountries(favorite);
  };

  useEffect(() => {
    // 1. API 호출해서 나온 값 받기
    // 2. setCountries(받아온 값)
    // 3. 비동기로 한번 더 감싸주기

    //  countries에 값을 넣어주는 비동기 함수 만들어서
    //  실행까지,
    const countries = async () => {
      const date: CountryType[] = await getCountries();
      setCountries(date);
    };
    countries();
  }, []);

  console.log(countries);

  return (
    <>
      <h1 className=" text-center text-2xl font-semibold">favoriteCountries</h1>
      <div className="grid grid-cols-4 gap-6 justify-items-center">
        {countries.map((date) => {
          if (!date.isDone) {
            return;
          }
          return (
            <CountryList onFavoriteCountry={onFavoriteCountry} date={date} />
          );
        })}
      </div>
      <h1 className=" text-center text-2xl font-semibold">Countries</h1>
      <div className="grid grid-cols-4 gap-6 justify-items-center">
        {countries.map((date) => {
          if (date.isDone) {
            return;
          }
          return (
            <CountryList onFavoriteCountry={onFavoriteCountry} date={date} />
          );
        })}
      </div>
    </>
  );
}

export default App;
