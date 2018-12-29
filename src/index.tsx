import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import RouterSwitch from './components/RouterSwitch';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
      <Route component={RouterSwitch} />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
