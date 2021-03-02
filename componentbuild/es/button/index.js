import _Set from "@babel/runtime-corejs3/core-js-stable/set";
import _Array$from from "@babel/runtime-corejs3/core-js-stable/array/from";
import React from 'react';
export function ButtonTest() {
  return '22777';
}
export default function Button() {
  var str = '开始-----=====';
  var s = new _Set();
  s.add('dududddd');

  var arr = _Array$from(s);

  return /*#__PURE__*/React.createElement("button", null, str, arr);
}