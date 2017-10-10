console.log('Hi from main.js ');
import React from 'react';
import ReactDOM from 'react-dom';
import SwimTable from './SwimTable';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(SwimTable),
    document.getElementById('swim-table')
  );
});