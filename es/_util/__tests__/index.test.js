import { getPrefixCls } from '..';
describe('test getPrefixCls function', function () {
  it('should render the correct result', function () {
    expect(getPrefixCls('btn')).toEqual('yy-btn');
  });
});