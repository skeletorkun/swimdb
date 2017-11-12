import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './components/App'
import AddNewSwimFormComponent from './components/form/AddNewSwimFormComponent'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = configureStore();

document.addEventListener('DOMContentLoaded', function() {
   render(
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ App }/>
          <Route path='/add' component={ AddNewSwimFormComponent }/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
});
registerServiceWorker();