import { Info } from './utils/Info.js';
import { getAllCoins } from './utils/Coins.js';
import { generateCards } from './utils/Card.js';
import { trackToggleInputs } from './utils/TrackCoin.js';
async function init() {
  try {
    const coins = await getAllCoins();
    console.log(coins);
    generateCards(coins);
  } catch (error) {
    console.error(error);
  }

  try {
    await trackToggleInputs();
  } catch (error) {
    console.error(error);
  }
}
init();
