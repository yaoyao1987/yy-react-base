"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _spin = _interopRequireDefault(require("../spin"));

var testProps = {
  spinning: false,
  size: 'large'
};
describe('test Spin component', function () {
  it('sholud render correct component', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_spin.default, null));
    var element = wrapper.container.querySelector('.yy-spin');
    expect(element.tagName).toEqual('SPAN');
    expect(element).toHaveClass('yy-spin yy-spin-spinning');
    expect(wrapper).toMatchSnapshot();
  });
  it('sholud render correct size', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_spin.default, testProps));
    var element = wrapper.container.querySelector('.yy-spin');
    expect(element.tagName).toEqual('SPAN');
    expect(element).not.toHaveClass('yy-spin-spinning');
    expect(element).toHaveClass('yy-spin-large');
  });
});