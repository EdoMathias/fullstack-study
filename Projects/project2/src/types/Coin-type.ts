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
  y: number;
}

export interface ChartData {
  type: string;
  name: string;
  showInLegend: boolean;
  xValueType: string;
  dataPoints: DataPoint[];
}

export class CoinsMngr {
  coins: Coin[] = [];
  selected: string[] = [];
  selectedSymbols: string[] = [];
}

export type CoinMarketData = {
  market_data: {
    current_price: { usd: number; eur: number; ils: number };
  };
  image: { small: string };
};
