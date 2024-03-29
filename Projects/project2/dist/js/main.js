var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CoinsMngr } from './types/Coin-type.js';
import { getAllCoins } from './utils/Coins.js';
import { generateCards } from './utils/Card.js';
import { navigationHandlers } from './utils/Navigation-handler.js';
import { searchCoinHandler } from './utils/Search.js';
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const cMngr = new CoinsMngr();
        try {
            cMngr.coins = yield getAllCoins();
            generateCards(cMngr);
        }
        catch (error) {
            console.error(error);
        }
        navigationHandlers(cMngr);
        searchCoinHandler(cMngr);
    });
}
init();
