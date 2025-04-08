# Summary
DSA and System Design

This is a repo with DSA and System Design concepts

## Features

### DSA

Image you are given a stream of data points consists of `<timestamp, commodityPrice>` 
you are supposed to return the `maxCommodityPrice` at any point in time (i.e. we basically asking for "all time high" 
and it can be asked at any given time).

The timestamps in the stream can be out of order, or there can be dupliate `timestamps`, 
we need to update the `commodityPrice` at that particular `timestamp` if an entry for the timestamps already exists.

Create an in-memory solution tailored to prioritize frequent reads and writes for the given problem statement.

```
interface RunningCommodityPrice {
    void upsertCommodityPrice(int timestamp, int commodityPrice);
    int getMaxCommodityPrice();
}

RunningCommodityPrice r = new RunningCommodityPrice();
r.upsertCommodityPrice(4, 27);
r.upsertCommodityPrice(6, 26);
r.upsertCommodityPrice(9, 25);
r.getMaxCommodityPrice();       // output should be 27 which is at timestamp 4
r.upsertCommodityPrice(4, 28);  // timestamp can come out of order, there can be duplicate set of commodity price for the same timestamp
r.getMaxCommodityPrice():       // output should be 28 from timstamp 4


interface RunningCommodityPrice {
    int upsertCommodityPrice(int timestamp, int commodityPrice);  // returns checkpoint id
    int getCommodityPrice(int timestamp, int checkpoint);  // returns commodity price at check point for timestamp
}

RunningCommodityPrice r = new RunningCommodityPrice();
int firstCheckpoint = r.upsertCommodityPrice(14, 27);
---------
int secondCheckpoint = r.upsertCommodityPrice(16, 26);
int thirdCheckpoint = r.upsertCommodityPrice(19, 25);
int fourthCheckpoint = r.upsertCommodityPrice(14, 24);
---------
int fifthCheckpoint = r.upsertCommodityPrice(16, 23);
int sixthCheckpoint = r.upsertCommodityPrice(14, 20);

r.getCommodityPrice(14, fifthCheckpoint);    // returns 24
// since price at timestamp 14 got updated to 24 on or before fifthCheckpoint
r.getCommodityPrice(14, secondCheckpoint);   // returns 27
// since price at timestamp 14 got updated to 27 on or before secondCheckpoint
r.getCommodityPrice(16, sixthCheckpoint);    // returns 23 
// since price at timestamp 16 got updated 23 either on or before sixthCheckpoint
```

### System Design

See documentation [here](docs/system-design.md) 

## 🚀 About Me

I'm a full stack developer primarily working on AWS platform services and using CDK for infrastructure deployments

## 🛠 Skills

AWS, CDK, Serverless Framework, React, Typescript, Python
