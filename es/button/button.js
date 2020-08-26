import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '@util';
var prefixCls = getPrefixCls('btn');
export var Button = function Button(props) {
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
      restProps = _objectWithoutProperties(props, ["type", "className", "disabled", "size", "children", "href", "ghost", "danger", "block", "loading"]);

  var classes = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-large"), size === 'large'), _defineProperty(_classNames, "disabled", type === 'link' && disabled), _defineProperty(_classNames, "".concat(prefixCls, "-ghost"), ghost), _defineProperty(_classNames, "".concat(prefixCls, "-danger"), danger), _defineProperty(_classNames, "".concat(prefixCls, "-block"), block), _classNames));

  if (type === 'link' && href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: classes,
      href: href
    }, restProps), children);
  }

  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    disabled: disabled
  }, restProps), children);
};
Button.displayName = 'Button';
Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false
};
export default Button;