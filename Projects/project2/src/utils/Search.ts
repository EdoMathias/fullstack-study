import { Coin, CoinsMngr } from '../types/Coin-type.js';
import { generateCards } from './Card.js';
import { removeActiveClassFromLinks } from './Navigation-handler.js';
import { trackToggleInputs } from './TrackCoin.js';

export function searchCoinHandler(cMnger: CoinsMngr) {
  const searchButton = document.getElementById('search-submit-button');
  searchButton?.addEventListener('click', () => {
    const searchInput = document.getElementById(
      'search-input-box'
    ) as HTMLInputElement;
    let coinToSearch = '';
    if (searchInput) {
      coinToSearch = searchInput.value;
    }
    searchCoin(cMnger, coinToSearch);
  });
}

async function searchCoin(cMnger: CoinsMngr, coinToSearch: string) {
  if (!coinToSearch) {
    await generateCards(cMnger);
  } else {
    const filteredCoin = cMnger.coins.filter(
      (coin) => coin.symbol === coinToSearch
    );
    const searchCoinMngr = new CoinsMngr();
    searchCoinMngr.coins = filteredCoin;
    searchCoinMngr.selected = cMnger.selected;
    searchCoinMngr.selectedSymbols = cMnger.selectedSymbols;
    await generateCards(searchCoinMngr);
    removeActiveClassFromLinks();
  }
}
