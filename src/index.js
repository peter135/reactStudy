import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store,history } from './initData'
import { Main } from './router/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Switch>
              <Main/>
        </Switch>
      </Router>
  </Provider>,
  document.getElementById('root')
);

