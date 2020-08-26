"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _util = require("@util");

var prefixCls = (0, _util.getPrefixCls)('btn');

var Button = function Button(props) {
  var _classNames;

  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      className = props.className,
      disabled = props.disabled,
      size = props.size,
      children = props.children,
      href = props.href,
      ghost = props.ghost,
      danger = props.danger,
      block = props.block,
      loading = props.loading,
      restProps = (0, _objectWithoutProperties2.default)(props, ["type", "className", "disabled", "size", "children", "href", "ghost", "danger", "block", "loading"]);
  var classes = (0, _classnames.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(type), type), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-small"), size === 'small'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-large"), size === 'large'), (0, _defineProperty2.default)(_classNames, "disabled", type === 'link' && disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-ghost"), ghost), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-danger"), danger), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-block"), block), _classNames));

  if (type === 'link' && href) {
    return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
      className: classes,
      href: href
    }, restProps), children);
  }

  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: classes,
    disabled: disabled
  }, restProps), children);
};

exports.Button = Button;
Button.displayName = 'Button';
Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false
};
var _default = Button;
exports.default = _default;