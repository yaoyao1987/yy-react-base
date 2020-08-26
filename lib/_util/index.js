"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrefixCls = void 0;

var getPrefixCls = function getPrefixCls(type) {
  var prefix = 'yy';
  return "".concat(prefix, "-").concat(type);
};

exports.getPrefixCls = getPrefixCls;