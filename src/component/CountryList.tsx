import React from "react";

const CountryList = ({ onFavoriteCountry, date }) => {
  return (
    <div
      key={date.ccm3}
      className="w-72 h-36 flex flex-col justify-center items-center gap-3 shadow-xl  rounded-xl"
      onClick={() => onFavoriteCountry(date.name.common)}
    >
      <img src={date.flags.png} className=" w-20 h-auto" />
      <h2 className=" font-semibold">{date.name.common}</h2>
      <p>{date.capital}</p>
    </div>
  );
};

export default CountryList;
