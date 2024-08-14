import { AuthentictionMiddleware } from './authentiction.middleware';

describe('AuthentictionMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthentictionMiddleware()).toBeDefined();
  });
});
