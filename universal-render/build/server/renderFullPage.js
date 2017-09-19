'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderFullPage;
function renderFullPage(html, preloadedState) {
  return '\n    <!DOCTYPE html>\n      <html>\n        <head>\n          <title>Your SSR React Router Node App initialised with data</title>\n        </head>\n        <body>\n          <div id="root">' + html + '</div>\n          <script>\n            window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '``u003c') + '\n          </script>\n          <script src="/bundle.js"></script>\n        </body>\n      </html>\n  ';
}