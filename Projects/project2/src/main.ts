import { Fetch } from './utils/Fetch.js';
import { Coins } from './utils/Coins.js';
async function init() {
  // const baseUrl = 'https://api.coingecko.com/api/v3/coins';
  const result = await Coins.getAllCoins();
  console.log(result);
  const filteredCoin = result.getFilteredCoin('BTC');
  console.log(filteredCoin);

  ///...
}
init();

async function getMoreInfo(id: string) {
  const baseUrl = 'https://api.coingecko.com/api/v3/coins';
  // const data = Fetch.get(`${baseUrl}/${id}`);
}
