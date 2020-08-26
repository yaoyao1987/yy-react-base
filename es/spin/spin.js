import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '@util';
var prefixCls = getPrefixCls('spin');
export var Spin = function Spin(props) {
  var _classNames;

  var spinning = props.spinning,
      size = props.size,
      className = props.className;
  var classes = classNames(prefixCls, "".concat(prefixCls, "-dot-spin"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-large"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-spinning"), spinning), _classNames));
  return /*#__PURE__*/React.createElement("span", {
    className: classes
  }, /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }));
};
Spin.displayName = 'Spin';
Spin.defaultProps = {
  spinning: true
};
export default Spin;