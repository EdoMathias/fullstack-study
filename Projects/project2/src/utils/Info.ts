export class Info {
  private static _cache: Record<
    string,
    {
      data: { usd: number; eur: number; ils: number; picture: string };
      timestamp: number;
    }
  > = {};
  static async get(url: string) {
    const now = Date.now();
    if (Info._cache != null && Info._cache[url] != null) {
      if (
        Info._cache[url] &&
        now - Info._cache[url].timestamp <= 2 * 60 * 1000
      ) {
        return Info._cache[url].data;
      }
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
      Info._cache[url] = {
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
