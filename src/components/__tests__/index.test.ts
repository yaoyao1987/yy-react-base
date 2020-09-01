const OLD_NODE_ENV = process.env.NODE_ENV;
process.env.NODE_ENV = 'development';
const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
const yy = require('..');

describe('yy', () => {
  afterAll(() => {
    process.env.NODE_ENV = OLD_NODE_ENV;
  });

  it('exports modules correctly', () => {
    expect(Object.keys(yy)).toMatchSnapshot();
  });

  it('should hint when import all components in dev mode', () => {
    expect(warnSpy).toHaveBeenCalledWith(
      'You are using a whole package of yy, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
    );
    warnSpy.mockRestore();
  });
});
