import { expect } from 'chai';
import { getPackageVersion } from '../src/my-lib';

describe('my-lib', () => {
  describe('#getPackageVersion()', () => {
    it('sanity check', () => {
      expect(1).to.be.ok;
      expect(false).not.to.be.true;
      expect(true).to.be.true;
    });

    it('should get the package version', () => {
      const version = getPackageVersion();

      expect(version).to.be.equal('0.0.0');
    });
  });
});
