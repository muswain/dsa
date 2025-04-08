interface RunningCommodityPrice {
  upsertCommodityPrice(timestamp: number, commodityPrice: number): void;
  upsertCommodityPriceWithCheckpoint(timestamp: number, commodityPrice: number): number;
  getMaxCommodityPrice(): number;
  getCommodityPrice(timestamp: number, checkpoint: number): number; // returns commodity price at check point for timestamp
}

export class MaximumRunningCommodityPrice implements RunningCommodityPrice {
  private commodityPriceMap: Map<number, number>;
  private maxCommodityPrice: number;
  private checkpointCounter: number;

  constructor() {
    this.commodityPriceMap = new Map();
    this.maxCommodityPrice = -Infinity;
    this.checkpointCounter = 0;
  }
  upsertCommodityPriceWithCheckpoint(timestamp: number, commodityPrice: number): number {
    throw new Error('Method not implemented.');
  }

  getCommodityPrice(timestamp: number, checkpoint: number): number {
    throw new Error('Method not implemented.');
  }

  upsertCommodityPrice(timestamp: number, commodityPrice: number): void {
    // Add error/validation checks

    this.commodityPriceMap.set(timestamp, commodityPrice);

    if (commodityPrice > this.maxCommodityPrice) {
      this.maxCommodityPrice = commodityPrice;
    }
  }

  getMaxCommodityPrice(): number {
    return this.maxCommodityPrice;
  }
}
