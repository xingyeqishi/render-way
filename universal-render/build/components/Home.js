'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react2.default.createElement(
    'div',
    null,
    'You are on your home page',
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/pokemon' },
      'Pokemon'
    )
  );
}