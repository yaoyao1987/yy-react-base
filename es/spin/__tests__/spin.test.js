import React from 'react';
import { render } from '@testing-library/react';
import Spin from '../spin';
var testProps = {
  spinning: false,
  size: 'large'
};
describe('test Spin component', function () {
  it('sholud render correct component', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Spin, null));
    var element = wrapper.container.querySelector('.yy-spin');
    expect(element.tagName).toEqual('SPAN');
    expect(element).toHaveClass('yy-spin yy-spin-spinning');
    expect(wrapper).toMatchSnapshot();
  });
  it('sholud render correct size', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Spin, testProps));
    var element = wrapper.container.querySelector('.yy-spin');
    expect(element.tagName).toEqual('SPAN');
    expect(element).not.toHaveClass('yy-spin-spinning');
    expect(element).toHaveClass('yy-spin-large');
  });
});