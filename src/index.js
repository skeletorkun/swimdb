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
            <Route exact path='/' component={ Main }/>
            <Route exact path='/login' component={ LoginComponent }/>
            <Route path='/add' component={ SwimForm } />
            <Route path='/edit' component={ SwimForm } />
            <Route path='/filters' component={ FiltersForm } />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
});
registerServiceWorker();
