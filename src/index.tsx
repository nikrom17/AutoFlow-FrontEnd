import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.less';
import App from './app/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { Auth0Provider } from '@auth0/auth0-react';
import auth0Config from '../auth0-config';
// import * as Sentry from '@sentry/react';
// import { Integrations as AmpIntegrations } from '@sentry/apm';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

if (process.env.NODE_ENV === 'production') {
  LogRocket.init('kophx0/autoflow');
  setupLogRocketReact(LogRocket);

  LogRocket.identify('ADMIN', {
    name: 'Nikolaus Roman',
    email: 'nikolaus.j.roman@gamil.com',
  });

  // Sentry.init({
  //   dsn: 'https://56989b19084a4a0783d729f02cc0ff2a@o419182.ingest.sentry.io/5329556',
  //   integrations: [new AmpIntegrations.Tracing()],
  //   tracesSampleRate: 0.25,
  // });
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, LogRocket.reduxMiddleware()))
);

const onRedirectCallback = (appState: any) => {
  // history.push(
  //   appState && appState.returnTo
  //     ? appState.returnTo
  //     : window.location.pathname
  // );
  console.log(appState);
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      redirectUri={auth0Config.redirect}
      onRedirectCallback={onRedirectCallback}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
