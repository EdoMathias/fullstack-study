import { Coin } from "../types/Coin-type";
import { getAllCoins } from "./Coins.js";

const trackedCoins: string[] = [];
export async function trackToggleInputs(coinData: Coin[]) {
  const cardIds = coinData.map((coin) => coin.id);
  console.log(cardIds); // remove later

  const cardStates: Record<string, boolean> = {};

  cardIds.forEach((cardId) => {
    const toggleInput = document.getElementById(
      `${cardId}-toggle`
    ) as HTMLInputElement;

    if (toggleInput) {
      toggleInput.addEventListener("click", () => {
        cardStates[cardId] = toggleInput.checked;
        console.log(
          `Toggle for card ${cardId} is ${
            toggleInput.checked ? "checked" : "unchecked"
          }.`
        );

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
}

function updateModalContents(trackedCoins: string[]) {
  const modalHeader = document.querySelector(".modal-title");
  const modalBody = document.querySelector(".modal-body");
  let modalBodyData = "";
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
    console.log("modalBody updated"); // remove later
    showModal();
  }
}

function showModal() {
  $("#myModal").modal("show");
}
