console.log('Hi from main.js ');
import React from 'react';
import ReactDOM from 'react-dom';
import SwimApp from './SwimApp';
 
document.addEventListener('DOMContentLoaded', function() {
  
  ReactDOM.render(
    React.createElement(SwimApp),
    document.getElementById('swim-app')
  );
});