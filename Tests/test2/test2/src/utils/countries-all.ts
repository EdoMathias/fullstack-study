import { Country } from '../types/Country';

export async function getAllCountries(): Promise<Country[]> {
  const result = await fetch('https://restcountries.com/v3.1/all');
  const countries = await result.json();
  return countries.map((country: any) => ({
    name: country.name.official,
    population: country.population,
    region: country.region,
    currencies: country.currencies ? Object.keys(country.currencies) : [],
  }));
}
