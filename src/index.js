import React from 'react';
import ReactDOM from 'react-dom';
// Named component that is used to wrap App component
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App';
import reducers from './reducers'

ReactDOM.render(
  // Notice the function call to createStore, passing in reducers
  // Store holds the reducers AND the states
<Provider store={createStore(reducers)}>
  <App />
</Provider>
, document.querySelector('#root')
);
