import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import List from './List';
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>

        <Link to="/list">List</Link>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" component={List} />
        </Switch>
      </div>
    );
  }
};
