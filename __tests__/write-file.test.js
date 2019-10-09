let writeFile = jest.fn();
writeFile.mockReturnValue('Some sample text');

describe('write file function', () => {
  it('writes a file', () => {
    expect(writeFile()).toBe('Some sample text');
  });
});