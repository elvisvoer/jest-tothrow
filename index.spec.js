const shortErrorMessage = require('./index').shortErrorMessage;
const longerErrorMessage = require('./index').longerErrorMessage;

describe('jest toThrow', () => {
  describe('shortErrorMessage', () => {
    it('should throw an error', () => {
      expect(() => {
        shortErrorMessage();
      }).toThrow('my error text message');
    });
  });

  describe('longerErrorMessage', () => {
    it('should throw error (partial match???)', () => {
      expect(() => {
        longerErrorMessage();
      }).toThrow('my error text message');
    });

    it('should throw the error (full match)', () => {
      expect(() => {
        longerErrorMessage();
      }).toThrow('my error text message with some extra text');
    });
  });
});
