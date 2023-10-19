import { Info } from './utils/Info.js';
import { Coin, CoinsMngr } from './types/Coin-type.js';
import { getAllCoins } from './utils/Coins.js';
import { generateCards } from './utils/Card.js';
import { trackToggleInputs } from './utils/TrackCoin.js';
import {
  navigationHandlers,
  removeActiveClassFromLinks,
} from './utils/Navigation-handler.js';
async function init() {
  const cMngr = new CoinsMngr();
  // let coins: Coin[] = [];
  try {
    cMngr.coins = await getAllCoins();
    console.log(cMngr.coins);
    generateCards(cMngr.coins);
  } catch (error) {
    console.error(error);
  }

  try {
    await trackToggleInputs(cMngr);
  } catch (error) {
    console.error(error);
  }

  navigationHandlers(cMngr.coins);
}
init();
