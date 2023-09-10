var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Fetch {
    static get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = Date.now();
            if (Fetch._cache[url] &&
                now - Fetch._cache[url].timestamp <= 2 * 60 * 1000) {
                return Fetch._cache[url].data;
            }
            try {
                const result = yield fetch(url);
                const data = yield result.json();
                const currentPrice = data.market_data.current_price;
                Fetch._cache[url] = {
                    data: {
                        usd: currentPrice.usd,
                        eur: currentPrice.eur,
                        ils: currentPrice.ils,
                        picture: data.image.small,
                    },
                    timestamp: Date.now(),
                };
                return data;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
