import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/index.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import Week from './components/Week';


let store = createStore(reducer);

ReactDOM.render(
      <Provider store={store}>
        <Week />
      </Provider>,
      document.getElementById('root')
    );
