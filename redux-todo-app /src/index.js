import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// To use Redux -> create a store -> holds a single source of truth
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoReducer from './reducers/todo'
// raw data
const todos = [
    {
      task: "make react todo app",
      isCompleted: false
    },
    {
      task: "eat breakfast",
      isCompleted: true
    }
  ]
// reducers take actions and then change the state

const store = createStore(TodoReducer, todos) 

ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
