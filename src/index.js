import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { NavigationContainer } from './pages/navigation/navigation.page'
import { store,history } from './initData'

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/" component={NavigationContainer} />
          <Route path="/page" component={NavigationContainer} />
        </Switch>
      </Router>
  </Provider>,
  document.getElementById('root')
);

