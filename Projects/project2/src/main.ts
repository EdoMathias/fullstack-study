import { Fetch } from './utils/Fetch.js';
import { getAllCoins } from './utils/Coins.js';
import { generateCards } from './utils/Card.js';
import { fetchMoreInfo } from './utils/MoreInfo.js';
// import { Coins } from './utils/Coins.js';
async function init() {
  try {
    const coins = await getAllCoins();
    console.log(coins);
    generateCards(coins);
  } catch (error) {
    console.error(error);
  }
  ///...
}
init();

async function moreInfo(id: string) {
  try {
    const result = await fetchMoreInfo(id);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
moreInfo('01coin');
