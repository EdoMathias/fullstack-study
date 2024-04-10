class ClacUtil {
  // must send a valid array with length > 0
  public getSum(arr: number[]): number {
    if (!arr || arr.length === 0) {
      throw new Error('Array is empty');
    }

    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    return sum;
  }
}

export const calcUtil = new ClacUtil();
