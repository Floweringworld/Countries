import { useEffect, useState } from "react";
import { getCountries } from "./api/api";
import CountryList from "./CountryList";
import FavoriteList from "./FavoriteList";

function App() {
  const [countries, setCountries] = useState([]);

  const onFavoriteCountry = (date) => {
    // name 같으면 isDone을 바꾸고 아니면 리턴
    const favorite = countries.map((country) => {
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
      const date = await getCountries();
      setCountries(date);
    };
    countries();
  }, []);

  return (
    <>
      <h1 className=" text-center text-2xl font-semibold">favoriteCountries</h1>
      <div className="grid grid-cols-4 gap-6 justify-items-center">
        <FavoriteList
          countries={countries}
          onFavoriteCountry={onFavoriteCountry}
        />
      </div>
      <h1 className=" text-center text-2xl font-semibold">Countries</h1>
      <div className="grid grid-cols-4 gap-6 justify-items-center">
        <CountryList
          countries={countries}
          onFavoriteCountry={onFavoriteCountry}
        />
      </div>
    </>
  );
}

export default App;
