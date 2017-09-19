'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  var pokemon = props.pokemon;


  return _react2.default.createElement(
    'div',
    null,
    'Your React Node app is set up!',
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/pokemon', exact: true, render: function render() {
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/pokemon/ability/telepathy' });
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/pokemon/ability/:ability', render: function render(location) {
          return _react2.default.createElement(_List2.default, { pokemon: pokemon.list, location: location });
        } })
    )
  );
};