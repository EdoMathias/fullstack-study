var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Info } from './Info.js';
import { trackToggleInputs } from './TrackCoin.js';
export function generateCards(cMngr) {
    return __awaiter(this, void 0, void 0, function* () {
        clearInterval(window.intervalId);
        const pageMain = document.querySelector('#page-contents-section');
        if (pageMain) {
            pageMain.innerHTML = `
    <section id="cards-section">
    <div id="coin-cards-div"
    class="mt-3 container justify-content-evenly row-cols-lg-3 row-cols-md-2 row-cols-sm-12 d-flex flex-row flex-wrap"
    ></div>
    </section>`;
        }
        const cardContainer = document.getElementById('coin-cards-div');
        const cardData = cMngr.coins
            .map((coinData) => `
        <div>
            <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <h4 id=${coinData.id}-header>${coinData.symbol}</h4>
                </div>
                <div class="col-sm-6">
                  <div
                    class="form-check form-switch d-flex justify-content-sm-evenly"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="${coinData.id}-toggle"
                    />
                    <label class="form-check-label" for="${coinData.id}"
                      >Track Coin</label
                    >
                  </div>
                </div>
              </div>
              <div class="row"></div>
              <div class="row">
                <div class="col-md-6">
                  <h6>${coinData.name}</h6>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <button
                    class="btn btn-primary more-info-buttons"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-${coinData.id}"
                    aria-expanded="false"
                    aria-controls="collapse-${coinData.id}"
                    id="${coinData.id}"
                  >
                    More info
                  </button>
                </div>
              </div>
              <div
                class="collapse card-footer bg-transparent"
                id="collapse-${coinData.id}"
              >
                  <p id="${coinData.id}-info" class="spinner-border sr-only"></p>
              </div>
            </div>
          </div>
          </div>`)
            .join('');
        if (cardContainer) {
            cardContainer.innerHTML = cardData;
            try {
                yield trackToggleInputs(cMngr);
            }
            catch (error) {
                console.error(error);
            }
            cMngr.selected.forEach((selectedId) => {
                const toggle = document.getElementById(`${selectedId}-toggle`);
                if (toggle) {
                    toggle.checked = true;
                }
            });
            const moreinfoButtons = document.querySelectorAll('.more-info-buttons');
            moreinfoButtons.forEach((button) => {
                button.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                    const infoParagraph = document.getElementById(`${button.id}-info`);
                    if (infoParagraph) {
                        const result = yield Info.get(`https://api.coingecko.com/api/v3/coins/${button.id}`);
                        if (result !== undefined) {
                            const infoParagraphDiv = document.getElementById(`collapse-${button.id}`);
                            if (infoParagraphDiv) {
                                infoParagraphDiv.innerHTML = `
                <ul>
                  <li>USD: ${result.market_data.current_price.usd}</li>
                  <li>EUR: ${result.market_data.current_price.eur}</li>
                  <li>ILS: ${result.market_data.current_price.ils}</li>
                  <li>Picture: <img src="${result.image.small}" alt="Coin Image"></li>
                </ul>`;
                                const cardFooter = infoParagraph.parentElement;
                                if (cardFooter) {
                                    cardFooter.innerHTML = infoParagraph.innerHTML;
                                }
                            }
                        }
                    }
                }));
            });
        }
    });
}
