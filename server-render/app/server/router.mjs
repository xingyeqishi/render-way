import ReactDOMServer from 'react-dom/server'
import React from 'react';
import renderFullPage from './renderFullPage';

import routes from './routes';
import Home from '../../build/Home';
import List from '../../build/List';

export default function router(req, res) {
    const url = req.url;    
    if (!routes.includes(url)) {
        res.status(404).send('Not found');
    }
    if (url == '/') {
        const data = {
            username: 'sxs'
        };
        const html = ReactDOMServer.renderToString(React.createElement(Home, {data: data}));
        res.status(200).send(renderFullPage(html, data, 'home.bundle.js'));
    }
    if (url === '/list') {
        const data = [
            {name: 'ttt', sport: 'ask'},
            {name: 'sss', sport: 'task'}
        ];
        const html = ReactDOMServer.renderToString(React.createElement(List, {data: data}));
        res.status(200).send(renderFullPage(html, data, 'list.bundle.js'));
    }
};
