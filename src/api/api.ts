import axios from "axios";
import { CountryType } from "../types/CountiesType";

export const getCountries = async (): Promise<CountryType[]> => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data.map((prev) => ({ ...prev, isDone: false }));
};
