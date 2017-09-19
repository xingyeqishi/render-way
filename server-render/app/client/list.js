import React from 'react';
import {render} from 'react-dom';
import List from '../components/List';
render(<List data={window.__PRELOADED_STATE__}/>, document.getElementById('root'));
