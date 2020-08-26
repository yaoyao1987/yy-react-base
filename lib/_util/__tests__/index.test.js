"use strict";

var _ = require("..");

describe('test getPrefixCls function', function () {
  it('should render the correct result', function () {
    expect((0, _.getPrefixCls)('btn')).toEqual('yy-btn');
  });
});