// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import EmailList from './components/EmailList';
import EmailDetail from './components/EmailDetail';
import './styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="sidebar">
          <EmailList />
        </div>
        <div className="content">
          <EmailDetail />
        </div>
      </div>
    </Provider>
  );
}

export default App;
