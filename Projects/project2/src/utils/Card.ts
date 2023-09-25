import { Coin } from '../types/Coin-type.js';
import { Info } from './Info.js';

export function generateCards(data: Coin[]) {
  const cardContainer = document.getElementById('coin-cards-div');
  const cardsToLoad = 100;

  function batchLoad(startIndex: number) {
    let cardsData = ``;
    for (
      let i = startIndex;
      i < Math.min(startIndex + cardsToLoad, data.length);
      i++
    ) {
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
                id="${coinData.id}"
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
              data-bs-target="#cardNum${i}"
              aria-expanded="false"
              aria-controls="cardNum${i}"
              id="${coinData.id}" 
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
      let batchedDiv = document.createElement('div');
      batchedDiv.innerHTML = cardsData;
      cardContainer.appendChild(batchedDiv);
      const moreinfoButtons = document.querySelectorAll('.more-info-buttons');
      moreinfoButtons.forEach((button) => {
        // console.log(button.id);

        button.addEventListener('click', async () => {
          const result = await Info.get(
            `https://api.coingecko.com/api/v3/coins/${button.id}`
          );
          console.log(result);
          console.log(`Clicked ${button.id}`);
        });
      });
      console.log(moreinfoButtons);
    }
  }
  for (
    let startIndex = 0;
    startIndex < data.length;
    startIndex += cardsToLoad
  ) {
    // for (let startIndex = 0; startIndex < 200; startIndex += cardsToLoad) {
    // if (startIndex + cardsToLoad < data.length) {
    console.log('in cards loop');

    setTimeout(() => batchLoad(startIndex), 1000);
  }
  // batchLoad(0);
}
