var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function trackToggleInputs(cMngr) {
    return __awaiter(this, void 0, void 0, function* () {
        const cardIds = cMngr.coins.map((coin) => coin.id);
        const cardSymbols = cMngr.coins.map((coin) => coin.symbol);
        cardIds.forEach((cardId) => {
            const toggleInput = document.getElementById(`${cardId}-toggle`);
            const header = document.getElementById(`${cardId}-header`);
            if (toggleInput && header) {
                const coinSymbol = header.textContent;
                toggleInput.addEventListener('click', () => {
                    if (toggleInput.checked && coinSymbol) {
                        cMngr.selected.push(cardId);
                        cMngr.selectedSymbols.push(coinSymbol);
                    }
                    else {
                        const index = cMngr.selected.indexOf(cardId);
                        if (index !== -1) {
                            cMngr.selected.splice(index, 1);
                            cMngr.selectedSymbols.splice(index, 1);
                        }
                    }
                    if (cMngr.selected.length >= 6) {
                        updateModalContents(cMngr.selected);
                        showModal();
                        removeTracking(cMngr.selected);
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
function removeTracking(trackedCoins) {
    trackedCoins.forEach((trackedCoin) => {
        const modalToggleInput = document.getElementById(`${trackedCoin}-modal-toggle`);
        const toggleInput = document.getElementById(`${trackedCoin}-toggle`);
        if (modalToggleInput) {
            modalToggleInput.addEventListener('click', () => {
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
