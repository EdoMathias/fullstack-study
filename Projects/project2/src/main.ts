import { Info } from './utils/Info.js';
import { Coin } from './types/Coin-type.js';
import { getAllCoins } from './utils/Coins.js';
import { generateCards } from './utils/Card.js';
import { trackToggleInputs } from './utils/TrackCoin.js';
import {
  navigationHandlers,
  removeActiveClassFromLinks,
} from './utils/Navigation-handler.js';
async function init() {
  let coins: Coin[] = [];
  try {
    coins = await getAllCoins();
    console.log(coins);
    generateCards(coins);
  } catch (error) {
    console.error(error);
  }

  try {
    await trackToggleInputs(coins);
  } catch (error) {
    console.error(error);
  }

  navigationHandlers(coins);
}
init();
