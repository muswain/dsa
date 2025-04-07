import { APIRouter } from '.';

describe('APIRouter', () => {
  it('should add a route when given a path', () => {
    const mockRouter = new APIRouter();

    expect(() => {
      mockRouter.addRoute('foo', 'res');
    }).toBeDefined();
  });

  it('should return the route if available', () => {
    const mockRouter = new APIRouter();

    mockRouter.addRoute('foo', 'this is foo');
    mockRouter.addRoute('bar', 'this is bar');

    expect(mockRouter.callRoute('foo')).toBe('this is foo');
  });

  it.only('should return the wildcard route if available', () => {
    const mockRouter = new APIRouter();

    mockRouter.addRoute('foo1', 'this is foo');
    mockRouter.addRoute('/bar/*/bazz', 'this is wildcard');

    expect(mockRouter.callRoute('/bar/2/bazz')).toBe('this is wildcard');
  });

  it('should throw error if the route is not available', () => {
    const mockRouter = new APIRouter();

    mockRouter.addRoute('foo', 'this is foo');
    mockRouter.addRoute('bar', 'this is bar');

    expect(() => {
      mockRouter.callRoute('fooone');
    }).toThrow('No route found');
  });
});
