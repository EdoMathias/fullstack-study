import { CoinMarketData } from '../types/Coin-type';

export async function fetchMoreInfo(cardId: string) {
  try {
    const result = await fetch(
      `https://api.coingecko.com/api/v3/coins/${cardId}`
    );
    const coinData: {
      market_data: {
        current_price: { usd: number; eur: number; ils: number };
      };
      image: { small: string };
    } = await result.json();
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
  } catch (error) {
    console.error(error);
  }
}
