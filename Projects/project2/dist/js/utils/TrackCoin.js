var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function trackToggleInputs(coinData) {
    return __awaiter(this, void 0, void 0, function* () {
        const cardIds = coinData.map((coin) => coin.id);
        console.log(cardIds); // remove later
        const trackedCoins = [];
        const cardStates = {};
        cardIds.forEach((cardId) => {
            const toggleInput = document.getElementById(`${cardId}-toggle`);
            if (toggleInput) {
                toggleInput.addEventListener('click', () => {
                    cardStates[cardId] = toggleInput.checked;
                    console.log(`Toggle for card ${cardId} is ${toggleInput.checked ? 'checked' : 'unchecked'}.`);
                    // Check how many cards are checked
                    let checkedCount = 0;
                    trackedCoins.length = 0;
                    for (const id in cardStates) {
                        if (cardStates[id]) {
                            trackedCoins.push(id);
                            checkedCount++;
                        }
                    }
                    console.log(trackedCoins, trackedCoins.length);
                    if (checkedCount >= 6) {
                        updateModalContents(trackedCoins);
                    }
                });
            }
        });
    });
}
function updateModalContents(trackedCoins) {
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
                    id="${trackedCoins[i]}-toggle"
                  />
                  <label class="form-check-label" for="${trackedCoins[i]}-toggle"
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
        console.log('modalBody updated');
        showModal();
    }
}
function showModal() {
    $('#myModal').modal('show');
}
