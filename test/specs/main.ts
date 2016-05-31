import { expect } from 'chai';

describe('Main Test', () => {
  it('should pass', () => {
    expect(1).to.be.ok;
    expect(false).not.to.be.true;
  });

  it('should test something', () => {
    expect(true).to.be.true;
  });
});
