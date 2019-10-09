const readFile = require('../read-file');

describe('read file function', () => {
  it('reads a file', () => {
    return readFile('./read-write/test-file.txt')
      .then(result => {
        expect(result).toBe('Some sample text');
      });
  });
});