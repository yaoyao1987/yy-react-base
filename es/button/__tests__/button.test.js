import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../button';
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
    var wrapper = render( /*#__PURE__*/React.createElement(Button, defaultProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('yy-btn yy-btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the correct component based on different props', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Button, testProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('yy-btn-primary yy-btn-large klass');
  });
  it('should render a link when type equals link and href is provided', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Button, {
      type: "link",
      href: "http://dummyurl"
    }, "Link"));
    var element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('yy-btn yy-btn-link');
  });
  it('should render disabled button when disabled set to true', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Button, disabledProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});