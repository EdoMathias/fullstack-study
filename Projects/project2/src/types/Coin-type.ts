export type Coin = {
  id: string;
  symbol: string;
  name: string;
};

export type CoinId = {
  id: string;
};

export class CoinsMngr {
  coins: Coin[] = [];
  selected: string[] = [];
}

export type CoinMarketData = {
  market_data: {
    current_price: { usd: number; eur: number; ils: number };
  };
  image: { small: string };
};
