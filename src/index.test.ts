import { MaximumRunningCommodityPrice } from '.';

describe('Find maximum commodity price', () => {
  it('should update maximum commodity price', () => {
    const maxRunningCommodity = new MaximumRunningCommodityPrice();

    expect(maxRunningCommodity.upsertCommodityPrice(2, 2)).toBeUndefined();
  });

  it('should return the maximum commodity price', () => {
    const maxRunningCommodity = new MaximumRunningCommodityPrice();

    maxRunningCommodity.upsertCommodityPrice(2, 2);
    maxRunningCommodity.upsertCommodityPrice(4, 27);
    maxRunningCommodity.upsertCommodityPrice(9, 29);
    maxRunningCommodity.upsertCommodityPrice(4, 27);
    maxRunningCommodity.upsertCommodityPrice(91, 4);
    maxRunningCommodity.upsertCommodityPrice(9, 56);

    expect(maxRunningCommodity.getMaxCommodityPrice()).toBe(56);
  });
});
