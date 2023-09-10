export class Fetch {
  private static _cache: Record<
    string,
    {
      data: { usd: number; eur: number; ils: number; picture: string };
      timestamp: number;
    }
  >;
  static async get(url: string) {
    const now = Date.now();
    if (
      Fetch._cache[url] &&
      now - Fetch._cache[url].timestamp <= 2 * 60 * 1000
    ) {
      return Fetch._cache[url].data;
    }
    try {
      const result = await fetch(url);
      const data: {
        market_data: {
          current_price: { usd: number; eur: number; ils: number };
        };
        image: { small: string };
      } = await result.json();
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
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
