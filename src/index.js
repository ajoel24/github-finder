import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GithubState>
      <AlertState>
        <App />
      </AlertState>
    </GithubState>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
