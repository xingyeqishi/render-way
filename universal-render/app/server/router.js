import { renderToString } from 'react-dom/server';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import routes from './routes';
import renderFullPage from './renderFullPage';
import getPokemon from '../services/getPokemon';
import App from '../components/App';

export default function router(req, res) {
  const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc , null);

  if (!match) {
    res.status(404).send('page not found');
    return;
  }

  return getPokemon.withAbility('telepathy')
    .then(resp => {
      const pokemon = { list: resp.pokemon } ;
      const context = {};

      const html = renderToString(
        <StaticRouter context={context} location={req.url}>
          <App pokemon={pokemon}/>
        </StaticRouter>
      );

      res.status(200).send(renderFullPage(html, pokemon));
    })
    .catch(err => {
      console.error(err);
      return res.status(404).send(`${err}: Oh No! I cannot find the telepathic pokemon... maybe they knew we are coming!`)
    });
};
