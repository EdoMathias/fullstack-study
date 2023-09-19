var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchMoreInfo(cardId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield fetch(`https://api.coingecko.com/api/v3/coins/${cardId}`);
            const coinData = yield result.json();
            const currentPrice = coinData.market_data.current_price;
            const filteredCoin = {
                coinData: {
                    usd: currentPrice.usd,
                    eur: currentPrice.eur,
                    ils: currentPrice.ils,
                    picture: coinData.image.small,
                },
            };
            return filteredCoin;
        }
        catch (error) {
            console.error(error);
        }
    });
}
