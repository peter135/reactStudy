import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { NavigationContainer } from './pages/navigation/navigation.page'
import { store,history } from './initData'
import NotFound404 from './pages/notFound/notFound'

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/" component={NavigationContainer} />
          <Route component={NotFound404} />
        </Switch>
      </Router>
  </Provider>,
  document.getElementById('root')
);

