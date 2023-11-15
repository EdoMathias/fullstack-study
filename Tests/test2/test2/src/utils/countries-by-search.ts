import { Country } from '../types/Country';

export async function getCountriesBySearch(): Promise<Country[]> {
  const searchInput = document.getElementById(
    'country-name'
  ) as HTMLInputElement;
  let countriesToSearch = '';
  if (searchInput) {
    countriesToSearch = searchInput.value;
  }
  const result = await fetch(
    `https://restcountries.com/v3.1/name/${countriesToSearch}`
  );
  const countries = await result.json();
  return countries.map((country: any) => ({
    name: country.name.official,
    population: country.population,
    region: country.region,
    currencies: country.currencies ? Object.keys(country.currencies) : [],
  }));
}
