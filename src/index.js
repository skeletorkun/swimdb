import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './components/Main'
import LoginContainer from './components/user/LoginContainer'
import SwimForm from './components/form/SwimForm'
import FiltersForm from './components/filters/FiltersForm'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import withTracker from './analytics'

import './index.css'

const store = configureStore();

document.addEventListener('DOMContentLoaded', function() {
   render(
    <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ withTracker(Main) }/>
            <Route exact path='/login' component={  withTracker(LoginContainer) }/>
            <Route path='/add' component={ withTracker(SwimForm) } />
            <Route path='/edit' component={  withTracker(SwimForm) } />
            <Route path='/filters' component={  withTracker(FiltersForm) } />
          </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
});
registerServiceWorker();
