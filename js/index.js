require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import LiveSearch from './components/live-search';
import presidents from './presidents';

ReactDOM.render(<LiveSearch items={presidents}/>, document.getElementById('app'));

