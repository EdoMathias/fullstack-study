var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAllCoins } from "./Coins.js";
export function trackToggleInputs() {
    return __awaiter(this, void 0, void 0, function* () {
        let coinData = [];
        coinData = yield getAllCoins();
        const cardIds = coinData.map((coin) => coin.id);
        console.log(cardIds);
        const cardStates = {};
        cardIds.forEach((cardId) => {
            const toggleInput = document.getElementById(cardId);
            if (toggleInput) {
                toggleInput.addEventListener("change", () => {
                    cardStates[cardId] = toggleInput.checked;
                    console.log(`Toggle for card ${cardId} is ${toggleInput.checked ? "checked" : "unchecked"}.`);
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
                            const input = document.getElementById(id);
                            if (input && !cardStates[id]) {
                                input.disabled = true;
                            }
                        });
                    }
                    else {
                        // Enable all inputs if less than 5 cards are checked
                        cardIds.forEach((id) => {
                            const input = document.getElementById(id);
                            if (input) {
                                input.disabled = false;
                            }
                        });
                    }
                });
            }
        });
    });
}
