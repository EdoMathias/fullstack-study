var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = `https://api.coingecko.com/api/v3/coins/list`;
export class Coins {
    constructor(_coins) {
        this._coins = _coins;
    }
    static getAllCoins() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fetch(baseUrl);
            const _coins = yield result.json();
            console.log(_coins);
        });
    }
    static getFilteredCoin(search) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
