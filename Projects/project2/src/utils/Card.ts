// import { Coins } from './Coins';
import { Coin } from "../types/Coin-type.js";
import { fetchMoreInfo } from "./MoreInfo.js";
// import { CoinMarketData } from '../types/Coin-type';

export function generateCards(data: Coin[]) {
  const cardContainer = document.getElementById("coin-cards-div");
  const cardsToLoad = 20;
  let cardsData = ``;

  async function callFetchMoreInfo(id: string) {
    try {
      const result = await fetchMoreInfo(id);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  function batchLoad(startIndex: number) {
    for (let i = 0; i < Math.min(startIndex + cardsToLoad, data.length); i++) {
      const coinData = data[i];
      cardsData += `
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
            <h6>${coinData.name}</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cardNum${i}"
              aria-expanded="false"
              aria-controls="cardNum${i}"
              id="more-info-button${i}"
            >
              More info
            </button>
          </div>
        </div>
        <div
          class="collapse card-footer bg-transparent"
          id="cardNum${i}"
        >
          <p class="text-justify text-wrap mt-2">placeholder text</p>
        </div>
      </div>
    </div>`;
    }
    if (cardContainer) {
      cardContainer.innerHTML = cardsData;
    }
    if (startIndex + cardsToLoad < 100) {
      // if (startIndex + cardsToLoad < data.length) {
      setTimeout(() => batchLoad(startIndex + cardsToLoad), 0);
    }
  }
  batchLoad(0);
}
