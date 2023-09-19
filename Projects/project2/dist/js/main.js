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
// import { Coins } from './utils/Coins.js';
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const coins = yield getAllCoins();
            console.log(coins);
            // generateCards(coins);
        }
        catch (error) {
            console.error(error);
        }
        ///...
    });
}
init();
function getMoreInfo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = 'https://api.coingecko.com/api/v3/coins';
        // const data = Fetch.get(`${baseUrl}/${id}`);
    });
}
