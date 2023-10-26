import { CoinsMngr } from './types/Coin-type.js';
import { getAllCoins } from './utils/Coins.js';
import { generateCards } from './utils/Card.js';
import { trackToggleInputs } from './utils/TrackCoin.js';
import { navigationHandlers } from './utils/Navigation-handler.js';
import { searchCoinHandler } from './utils/Search.js';
async function init() {
  const cMngr = new CoinsMngr();
  try {
    cMngr.coins = await getAllCoins();
    console.log(cMngr.coins);
    generateCards(cMngr);
  } catch (error) {
    console.error(error);
  }

  // try {
  //   await trackToggleInputs(cMngr);
  // } catch (error) {
  //   console.error(error);
  // }

  navigationHandlers(cMngr);
  searchCoinHandler(cMngr);
}
init();
