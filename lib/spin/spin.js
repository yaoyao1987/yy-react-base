"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Spin = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _util = require("@util");

var prefixCls = (0, _util.getPrefixCls)('spin');

var Spin = function Spin(props) {
  var _classNames;

  var spinning = props.spinning,
      size = props.size,
      className = props.className;
  var classes = (0, _classnames.default)(prefixCls, "".concat(prefixCls, "-dot-spin"), className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-small"), size === 'small'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-large"), size === 'large'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-spinning"), spinning), _classNames));
  return /*#__PURE__*/_react.default.createElement("span", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }));
};

exports.Spin = Spin;
Spin.displayName = 'Spin';
Spin.defaultProps = {
  spinning: true
};
var _default = Spin;
exports.default = _default;