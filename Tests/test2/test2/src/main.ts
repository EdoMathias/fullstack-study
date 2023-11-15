import './style.css';
import { Country } from './types/Country';
import { getAllCountries } from './utils/countries-all';
import { getCountriesBySearch } from './utils/countries-by-search';
import { generateStats } from './utils/generateStats';

let countries: Country[] = [];
async function init() {
  document
    .querySelector('#search-all-button')
    ?.addEventListener('click', async () => {
      countries = await getAllCountries();
      generateStats(countries);
    });
  document
    .querySelector('#search-countrty-button')
    ?.addEventListener('click', async () => {
      countries = await getCountriesBySearch();
      generateStats(countries);
    });
}
init();
