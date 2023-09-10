import { Fetch } from './utils/Fetch';
async function init() {
  const baseUrl = 'https://api.coingecko.com/api/v3/coins';
  const result = await fetch(`${baseUrl}/list`);
  const data = await result.json();
  ///...
}
init();

async function getMoreInfo(id: string) {
  const baseUrl = 'https://api.coingecko.com/api/v3/coins';
  const data = Fetch.get(`${baseUrl}/${id}`);
}
