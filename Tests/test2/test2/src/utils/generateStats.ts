import { Country } from '../types/Country';

export function generateStats(countries: Country[]) {
  const statisticsResultsDiv = document.querySelector('#stats-div');
  const countriesTableBody = document.querySelector('#countries-table-body');
  const regionTableBody = document.querySelector('#region-table-body');
  const currenciesTableBody = document.querySelector('#currencies-table-body');
  let totalPopulation = 0;
  let numOfCountriesinRegion: { [key: string]: number } = {};
  let numOfCurrency: { [key: string]: number } = {};

  countries.forEach((country) => {
    totalPopulation += country.population;
    numOfCountriesinRegion[country.region] =
      (numOfCountriesinRegion[country.region] || 0) + 1;
    country.currencies.forEach((currency) => {
      numOfCurrency[currency] = (numOfCurrency[currency] || 0) + 1;
    });
  });

  const statsInformation = `
  <h3>Total countries: ${countries.length}</h3>
  <h3>Total Countries Population: ${totalPopulation}</h3>
  <h3>Average Population: ${totalPopulation / countries.length}</h3>`;

  const countriesData = countries.map(
    (country) => `<tr id="${country.name}">
        <td>${country.name}</td>
        <td>${country.population}</td>
        <td>${country.currencies}</td>
    </tr>`
  );

  const uniqueRegions = [
    ...new Set(countries.map((country) => country.region)),
  ];

  const regionsData = uniqueRegions.map(
    (region) => `<tr id="${region}">
        <td>${region}</td>
        <td>${numOfCountriesinRegion[region]}</td>
    </tr>`
  );

  const currencyData = Object.keys(numOfCurrency).map(
    (currency) => `<tr id="${currency}">
        <td>${currency}</td>
        <td>${numOfCurrency[currency]}</td>
    </tr>`
  );

  statisticsResultsDiv!.innerHTML = statsInformation;
  countriesTableBody!.innerHTML = countriesData.join('');
  regionTableBody!.innerHTML = regionsData.join('');
  currenciesTableBody!.innerHTML = currencyData.join('');

  document.getElementById('countries-table')?.removeAttribute('hidden');
  document.getElementById('region-table')?.removeAttribute('hidden');
  document.getElementById('currencies-table')?.removeAttribute('hidden');
}
