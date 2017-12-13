import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppContainer from './components/AppContainer'
import LoginComponent from './components/user/LoginContainer'
import AddNewSwimFormContainer from './components/form/AddNewSwimFormContainer'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
            <Route exact path='/' component={ AppContainer }/>
            <Route exact path='/login' component={ LoginComponent }/>
            <Route path='/add' component={ AddNewSwimFormContainer }/>
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
});
registerServiceWorker();
