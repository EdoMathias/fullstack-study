import { Coin, CoinsMngr } from '../types/Coin-type';
import { getAllCoins } from './Coins.js';

export async function trackToggleInputs(cMngr: CoinsMngr) {
  const cardIds = cMngr.coins.map((coin) => coin.id);
  const cardSymbols = cMngr.coins.map((coin) => coin.symbol);
  console.log(cardIds);

  cardIds.forEach((cardId) => {
    const toggleInput = document.getElementById(
      `${cardId}-toggle`
    ) as HTMLInputElement;

    const header = document.getElementById(
      `${cardId}-header`
    ) as HTMLHeadingElement;

    if (toggleInput && header) {
      const coinSymbol = header.textContent;
      toggleInput.addEventListener('click', () => {
        console.log(
          `Toggle for card ${cardId} is ${
            toggleInput.checked ? 'checked' : 'unchecked'
          }.`
        );
        if (toggleInput.checked && coinSymbol) {
          cMngr.selected.push(cardId);
          cMngr.symbols.push(coinSymbol);
        } else {
          const index = cMngr.selected.indexOf(cardId);
          if (index !== -1) {
            cMngr.selected.splice(index, 1);
            cMngr.symbols.splice(index, 1);
          }
        }
        console.log(cMngr.selected);
        console.log(cMngr.symbols);
        if (cMngr.selected.length >= 6) {
          updateModalContents(cMngr.selected);
          showModal();
          removeTracking(cMngr.selected);
        }
      });
    }
  });
}

function updateModalContents(trackedCoins: string[]) {
  const modalHeader = document.querySelector('.modal-title');
  const modalBody = document.querySelector('.modal-body');
  let modalBodyData = '';
  for (let i = 0; i < 5; i++) {
    modalBodyData += `<div class="row">
              <div class="col-sm-6">
                <h4>${trackedCoins[i]}</h4>
              </div>
              <div class="col-sm-6">
                <div
                  class="form-check form-switch d-flex justify-content-sm-evenly"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="${trackedCoins[i]}-modal-toggle"
                    checked
                  />
                  <label class="form-check-label" for="${trackedCoins[i]}-modal-toggle"
                    >Track Coin</label
                  >
                </div>
              </div>
            </div>
      `;
  }
  if (modalHeader && modalBody) {
    modalBody.innerHTML = modalBodyData;
    modalHeader.textContent = `Select coin to remove:`;
  }
}

function showModal() {
  $('#myModal').modal('show');
}

function removeTracking(trackedCoins: string[]) {
  trackedCoins.forEach((trackedCoin) => {
    const modalToggleInput = document.getElementById(
      `${trackedCoin}-modal-toggle`
    ) as HTMLInputElement;
    const toggleInput = document.getElementById(
      `${trackedCoin}-toggle`
    ) as HTMLInputElement;

    if (modalToggleInput) {
      modalToggleInput.addEventListener('click', () => {
        console.log(
          `Toggle for card ${trackedCoin} is ${
            modalToggleInput.checked ? 'checked' : 'unchecked'
          }.`
        );

        // Update the main checkbox based on the modal checkbox
        if (modalToggleInput && toggleInput) {
          toggleInput.checked = modalToggleInput.checked;
        }
        let coinToRemove = trackedCoins.indexOf(trackedCoin);
        trackedCoins.splice(coinToRemove, 1);
        $('#myModal').modal('hide');
      });
    }
  });
}
