export class RateLimiter {
  private capacity: number;
  private tokens: number;
  private refillRate: number; // Tokens per second
  private lastRefillTime: number;

  constructor(capacity: number, refillRate: number) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRate;
    this.lastRefillTime = Date.now();
  }

  private refillTokens(): void {
    const now = Date.now();
    const elapsedTime = (now - this.lastRefillTime) / 1000; // Convert to seconds
    const refillAmount = Math.floor(elapsedTime * this.refillRate);

    if (refillAmount > 0) {
      this.tokens = Math.min(this.capacity, this.tokens + refillAmount);
      this.lastRefillTime = now;
    }
  }

  public consume(tokens: number = 1): boolean {
    this.refillTokens();

    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return true;
    }

    return false;
  }

  public getRemainingTokens(): number {
    this.refillTokens();
    return this.tokens;
  }
}

const main = () => {
  const limiter = new RateLimiter(5, 2); // 10 tokens max, refills 2 tokens per second

  setInterval(() => {
    if (limiter.consume()) {
      console.log('Request allowed:', limiter.getRemainingTokens(), 'tokens left.');
    } else {
      console.log('Request denied.');
    }
  }, 1000);
};

main();
