// import { Coins } from './Coins';
import { Coin } from '../types/Coin-type';
// import { CoinMarketData } from '../types/Coin-type';

export function generateCards(data: Coin[]) {
  const cardContainer = document.getElementById('coin-cards-div');
  data.forEach((data) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.innerHTML = `
    <div class="row">
                <div class="col-sm-6">
                  <h4>${data.id}</h4>
                </div>
                <div class="col-sm-6">
                  <div
                    class="form-check form-switch d-flex justify-content-sm-evenly"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label class="form-check-label" for="flexSwitchCheckDefault"
                      >Track Coin</label
                    >
                  </div>
                </div>
              </div>
              <div class="row"></div>
              <div class="row">
                <div class="col-md-6">
                  <h6>${data.name}</h6>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#more-info-collapse"
                    aria-expanded="false"
                    aria-controls="more-info-collapse"
                  >
                    More info
                  </button>
                </div>
              </div>
              <div
                class="collapse card-footer bg-transparent"
                id="more-info-collapse"
              >
                <p class="text-justify text-wrap mt-2">placeholder text</p>
              </div>
            </div>
            `;
    card.appendChild(cardBody);
    cardContainer?.appendChild(card);
  });
}
