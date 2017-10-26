console.log('Hi from main.js ')
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App'
import configureStore from './configureStore'

const store = configureStore();

document.addEventListener('DOMContentLoaded', function() {
   render(
    <Provider store={ store }>
      <BrowserRouter>
        <Route path='/' component={ App }/>
      </BrowserRouter>
    </Provider>,
    document.getElementById('swim-app')
  );
});