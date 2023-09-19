import { Coin } from '../types/Coin-type';

// import { Coin } from '../types/Coin-type';
const baseUrl = `https://api.coingecko.com/api/v3/coins/list`;

let coinsData: Coin[] = [];

export async function getAllCoins() {
  try {
    const result = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
    coinsData = await result.json();
    return coinsData;
  } catch (error) {
    console.error(error);
    return coinsData;
  }
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
