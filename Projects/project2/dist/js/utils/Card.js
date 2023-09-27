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
export function generateCards(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const cardContainer = document.getElementById('coin-cards-div');
        // const cardsToLoad = 100;
        const cardData = data
            .map((coinData) => `
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
                <p class="text-justify text-wrap mt-2">placeholder text</p>
              </div>
            </div>
          </div>
          </div>`)
            .join('');
        if (cardContainer) {
            cardContainer.innerHTML = cardData;
            const moreinfoButtons = document.querySelectorAll('.more-info-buttons');
            moreinfoButtons.forEach((button) => {
                button.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                    const result = yield Info.get(`https://api.coingecko.com/api/v3/coins/${button.id}`);
                    console.log(`Clicked ${button.id}`);
                }));
            });
        }
    });
}
// function batchLoad(startIndex: number) {
//   let cardsData = ``;
//   for (
//     let i = startIndex;
//     i < Math.min(startIndex + cardsToLoad, data.length);
//     i++
//   ) {
//     const coinData = data[i];
//     cardsData += `
//     <div class="card">
//     <div class="card-body">
//       <div class="row">
//         <div class="col-sm-6">
//           <h4>${coinData.id}</h4>
//         </div>
//         <div class="col-sm-6">
//           <div
//             class="form-check form-switch d-flex justify-content-sm-evenly"
//           >
//             <input
//               class="form-check-input"
//               type="checkbox"
//               role="switch"
//               id="${coinData.id}-toggle"
//             />
//             <label class="form-check-label" for="${coinData.id}"
//               >Track Coin</label
//             >
//           </div>
//         </div>
//       </div>
//       <div class="row"></div>
//       <div class="row">
//         <div class="col-md-6">
//           <h6>${coinData.name}</h6>
//         </div>
//       </div>
//       <div class="row">
//         <div class="col-md-6">
//           <button
//             class="btn btn-primary more-info-buttons"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#cardNum${i}"
//             aria-expanded="false"
//             aria-controls="cardNum${i}"
//             id="${coinData.id}"
//           >
//             More info
//           </button>
//         </div>
//       </div>
//       <div
//         class="collapse card-footer bg-transparent"
//         id="cardNum${i}"
//       >
//         <p class="text-justify text-wrap mt-2">placeholder text</p>
//       </div>
//     </div>
//   </div>`;
//   }
//   if (cardContainer) {
//     let batchedDiv = document.createElement('div');
//     batchedDiv.innerHTML = cardsData;
//     cardContainer.appendChild(batchedDiv);
//   }
//   const moreinfoButtons = document.querySelectorAll('.more-info-buttons');
//   moreinfoButtons.forEach((button) => {
//     // console.log(button.id);
//     button.addEventListener('click', async () => {
//       const result = await Info.get(
//         `https://api.coingecko.com/api/v3/coins/${button.id}`
//       );
//       console.log(result);
//       console.log(`Clicked ${button.id}`);
//     });
//   });
//   console.log(moreinfoButtons);
// }
// // for (
// //   let startIndex = 0;
// //   startIndex < data.length;
// //   startIndex += cardsToLoad
// // ) {
// for (let startIndex = 0; startIndex < 200; startIndex += cardsToLoad) {
//   // if (startIndex + cardsToLoad < data.length) {
//   console.log('in cards loop');
//   setTimeout(() => batchLoad(startIndex), 1000);
// }
// }
