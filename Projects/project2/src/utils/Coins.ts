import { Coin } from '../types/card';
const baseUrl = `https://api.coingecko.com/api/v3/coins/list`;
export class Coins {
  constructor(private _coins: Coin[]) {}

  static async getAllCoins() {
    const result = await fetch(baseUrl);
    const coins = await result.json();
    return new Coins(coins);
  }

  getFilteredCoin(search: string) {
    const filteredCoin = this._coins.find(
      (coin: { symbol: string }) => coin.symbol === search
    );
    if (!filteredCoin) {
      throw new Error('Coin does not exist!');
    }
    if (filteredCoin.symbol) {
      return filteredCoin;
    }
  }
}
