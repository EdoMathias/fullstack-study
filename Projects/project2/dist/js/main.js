var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAllCoins } from './utils/Coins.js';
import { generateCards } from './utils/Card.js';
import { trackToggleInputs } from './utils/TrackCoin.js';
import { navigationHandlers, } from './utils/Navigation-handler.js';
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        let coins = [];
        try {
            coins = yield getAllCoins();
            console.log(coins);
            generateCards(coins);
        }
        catch (error) {
            console.error(error);
        }
        try {
            yield trackToggleInputs(coins);
        }
        catch (error) {
            console.error(error);
        }
        navigationHandlers(coins);
    });
}
init();
