const CountryList = ({ countries, onFavoriteCountry }) => {
  return (
    <>
      {countries.map((date, index) => {
        if (date.isDone) {
          return;
        }
        return (
          <div
            key={index}
            className="w-72 h-36 flex flex-col justify-center items-center gap-3 shadow-xl  rounded-xl"
            onClick={() => onFavoriteCountry(date.name.common)}
          >
            <img src={date.flags.svg} className=" w-20 h-auto" />
            <h2 className=" font-semibold">{date.name.common}</h2>
            <p>{date.capital}</p>
          </div>
        );
      })}
    </>
  );
};

export default CountryList;
