import React from 'react';
import {render} from 'react-dom';
import Home from '../components/Home';
render(<Home data={window.__PRELOADED_STATE__}/>, document.getElementById('root'));
