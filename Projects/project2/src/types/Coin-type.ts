export type Coin = {
  id: string;
  symbol: string;
  name: string;
};

export type CoinId = {
  id: string;
};

export interface DataPoint {
  x: number;
  // x: string;
  // x: Date;
  y: number;
}

export class CoinsMngr {
  coins: Coin[] = [];
  selected: string[] = [];
  symbols: string[] = [];
}

export type CoinMarketData = {
  market_data: {
    current_price: { usd: number; eur: number; ils: number };
  };
  image: { small: string };
};
