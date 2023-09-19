var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let coinsData = [];
export function getAllCoins() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield fetch(`https://api.coingecko.com/api/v3/coins/list`);
            coinsData = yield result.json();
            return coinsData;
        }
        catch (error) {
            console.error(error);
            return coinsData;
        }
    });
}
// export async function main() {
//   try {
//     const coins = await getAllCoins();
//     console.log(coins);
//   } catch (error) {
//     console.error(error);
//   }
// }
// main();
