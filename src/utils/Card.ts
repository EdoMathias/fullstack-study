import { Coin } from '../types/Coin-type.js';
import { Info } from './Info.js';
import { trackToggleInputs } from './TrackCoin.js';

export async function generateCards(data: Coin[]) {
  const cardContainer = document.getElementById('coin-cards-div');

  const cardData = data
    .map(
      (coinData) =>
        `
        <div>
            <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <h4>${coinData.id}</h4>
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
                  <p id="${coinData.id}-info" class="spinner-border sr-only">Loading...</p>
              </div>
            </div>
          </div>
          </div>`
    )
    .join('');
  if (cardContainer) {
    cardContainer.innerHTML = cardData;
    const moreinfoButtons = document.querySelectorAll('.more-info-buttons');
    moreinfoButtons.forEach((button) => {
      button.addEventListener('click', async () => {
        const infoParagraph = document.getElementById(`${button.id}-info`);
        if (infoParagraph) {
          const result = await Info.get(
            `https://api.coingecko.com/api/v3/coins/${button.id}`
          );
          if (result !== undefined) {
            const infoParagraphDiv = document.getElementById(
              `collapse-${button.id}`
            );
            if (infoParagraphDiv) {
              infoParagraphDiv.innerHTML = `
                <ul>
                  <li>USD: ${result.market_data.current_price.usd}</li>
                  <li>EUR: ${result.market_data.current_price.eur}</li>
                  <li>ILS: ${result.market_data.current_price.ils}</li>
                  <li>Picture: <img src="${result.image.small}" alt="Coin Image"></li>
                </ul>`;
            }
          }
        }
        console.log(`Clicked ${button.id}`);
      });
    });
  }
}
