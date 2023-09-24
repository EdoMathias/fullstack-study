import { Coin } from "../types/Coin-type";
import { getAllCoins } from "./Coins.js";

export async function trackToggleInputs() {
  let coinData: Coin[] = [];
  coinData = await getAllCoins();

  const cardIds = coinData.map((coin) => coin.id);
  console.log(cardIds);

  const cardStates: Record<string, boolean> = {};

  cardIds.forEach((cardId) => {
    const toggleInput = document.getElementById(cardId) as HTMLInputElement;

    if (toggleInput) {
      toggleInput.addEventListener("change", () => {
        cardStates[cardId] = toggleInput.checked;
        console.log(
          `Toggle for card ${cardId} is ${
            toggleInput.checked ? "checked" : "unchecked"
          }.`
        );

        // Check how many cards are checked
        let checkedCount = 0;
        for (const id in cardStates) {
          if (cardStates[id]) {
            checkedCount++;
          }
        }

        if (checkedCount >= 5) {
          // Disable further selections if 5 cards are already checked
          cardIds.forEach((id) => {
            const input = document.getElementById(id) as HTMLInputElement;
            if (input && !cardStates[id]) {
              input.disabled = true;
            }
          });
        } else {
          // Enable all inputs if less than 5 cards are checked
          cardIds.forEach((id) => {
            const input = document.getElementById(id) as HTMLInputElement;
            if (input) {
              input.disabled = false;
            }
          });
        }
      });
    }
  });
}
