"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _button = _interopRequireDefault(require("../button"));

var defaultProps = {
  onClick: jest.fn()
};
var testProps = {
  type: 'primary',
  size: 'large',
  className: 'klass'
};
var disabledProps = {
  disabled: true,
  onClick: jest.fn()
};
describe('test Button component', function () {
  it('should render the correct default button', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_button.default, defaultProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('yy-btn yy-btn-default');
    expect(element.disabled).toBeFalsy();

    _react2.fireEvent.click(element);

    expect(defaultProps.onClick).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the correct component based on different props', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_button.default, testProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('yy-btn-primary yy-btn-large klass');
  });
  it('should render a link when type equals link and href is provided', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_button.default, {
      type: "link",
      href: "http://dummyurl"
    }, "Link"));
    var element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('yy-btn yy-btn-link');
  });
  it('should render disabled button when disabled set to true', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_button.default, disabledProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();

    _react2.fireEvent.click(element);

    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});