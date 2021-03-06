'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _mock = require('./mock');

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPokemon = {
  withAbility: function withAbility(ability) {
    var baseUrl = 'http://pokeapi.co/api/v2/ability';
    return _axios2.default.get(baseUrl + '/' + ability + '/').catch(function () {
      return _mock2.default;
    });
  }
};

exports.default = getPokemon;