import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Main from './components/Main'
import LoginComponent from './components/user/LoginContainer'
import SwimForm from './components/form/SwimForm'
import FiltersForm from './components/filters/FiltersForm'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import withTracker from './analytics';

import './index.css'

// Material UI
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

document.addEventListener('DOMContentLoaded', function() {
   render(
    <Provider store={ store }>
      <MuiThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ withTracker(Main) }/>
            <Route exact path='/login' component={  withTracker(LoginComponent) }/>
            <Route path='/add' component={ withTracker(SwimForm) } />
            <Route path='/edit' component={  withTracker(SwimForm) } />
            <Route path='/filters' component={  withTracker(FiltersForm) } />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
});
registerServiceWorker();
